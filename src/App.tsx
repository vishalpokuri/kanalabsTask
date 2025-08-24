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
import { ThemeProvider, useTheme } from "./contexts/ThemeContext.tsx";
import ButtonShowcase from "./pages/ButtonShowcase.tsx";
import CustomButton from "./components/ui/CustomButton.tsx";

function Home() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex h-screen items-center justify-center gap-8 bg-surface0">
      <div className="flex flex-col items-center gap-6">
        {/* Navigation buttons */}
        <div className="flex gap-4">
          <CustomButton
            size="large"
            type="text"
            onClick={() => navigate("/exchange")}
            variant="secondary"
          >
            Exchange
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/swap")}
            size="large"
            type="text"
            variant="secondary"
          >
            Swap
          </CustomButton>
          <CustomButton
            size="large"
            type="text"
            onClick={() => navigate("/buttons")}
            variant="secondary"
          >
            Buttons
          </CustomButton>
        </div>

        {/* Dark mode toggle */}
        <CustomButton
          size="large"
          type="text"
          onClick={toggleDarkMode}
          variant="secondary"
          className="flex items-center gap-3"
        >
          {isDarkMode ? "🌞" : "🌙"}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </CustomButton>
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
      <Route path="/buttons" element={<ButtonShowcase />} />
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
