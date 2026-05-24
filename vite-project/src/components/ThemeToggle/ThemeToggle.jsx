import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../../redux/slices/portfolioSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.portfolio.darkMode);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
      className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition hover:bg-[var(--accent-soft)]"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
