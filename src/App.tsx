// App.tsx
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
import { ThemeProvider, useTheme } from "./contexts/ThemeContext.tsx";

function Home() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex h-screen items-center justify-center gap-8 bg-surface0">
      <div className="flex flex-col items-center gap-6">
        {/* Navigation buttons */}
        <div className="flex gap-4">
          <Button onClick={() => navigate("/exchange")} variant="secondary">
            Exchange
          </Button>
          <Button onClick={() => navigate("/swap")} variant="secondary">
            Swap
          </Button>
        </div>

        {/* Dark mode toggle */}
        <Button
          onClick={toggleDarkMode}
          variant="secondary"
          className="flex items-center gap-2"
        >
          {isDarkMode ? "🌞" : "🌙"}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<ExchangePage />} />
      <Route path="/swap" element={<SwapPage />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
