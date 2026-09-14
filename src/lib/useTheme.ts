import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

function getStoredPreference(): Theme {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" ? "dark" : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

/**
 * Resolves the active theme. Light is always the default (regardless of OS preference) —
 * dark only applies once the user explicitly toggles it, which is then remembered in
 * localStorage. `index.html` carries a small inline script that applies a stored "dark"
 * choice before paint, so there's no flash of the wrong theme on load.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredPreference);

  useEffect(() => {
    if (theme === DEFAULT_THEME) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore write failures (private browsing, storage disabled, etc.)
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
