import React from "react";
import { ThemeKeyType } from "./types";
import { getInitialTheme, KEY_THEME_STORAGE } from "./utils";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === ThemeKeyType.dark;

    if (isDark) {
      root.classList.add(ThemeKeyType.dark);
    } else {
      root.classList.remove(ThemeKeyType.dark);
    }

    localStorage.setItem(KEY_THEME_STORAGE, theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(
    (_) => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
