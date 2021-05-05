import React from "react";
import { ThemeKeyType } from "./types";
import { getInitialTheme, KEY_THEME_STORAGE } from "./utils";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === ThemeKeyType.dark;

    root.classList.remove(isDark ? ThemeKeyType.light : ThemeKeyType.dark);
    root.classList.add(theme);

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
