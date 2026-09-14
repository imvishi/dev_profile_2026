import { MoonIcon, SunIcon } from "../icons/Icons";
import { useTheme } from "../../lib/useTheme";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {isDark ? <SunIcon className={styles.icon} /> : <MoonIcon className={styles.icon} />}
    </button>
  );
}
