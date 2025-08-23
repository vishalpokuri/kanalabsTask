import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ExchangePage from "./pages/ExchangePage";
import SwapPage from "./pages/SwapPage";
import { Button } from "./components/ui/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center gap-8 bg-surface0">
      <Button onClick={() => navigate("/exchange")} variant="secondary">
        Exchange
      </Button>
      <Button onClick={() => navigate("/swap")} variant="secondary">
        Swap
      </Button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/swap" element={<SwapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
