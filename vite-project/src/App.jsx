import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.portfolio.darkMode);

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      <Home />
    </div>
  );
}

export default App;
