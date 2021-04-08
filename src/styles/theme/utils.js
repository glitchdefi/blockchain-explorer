import { ThemeKeyType } from "./types";

export const KEY_THEME_STORAGE = "color-theme";

export const getInitialTheme = (_) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(KEY_THEME_STORAGE);
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return ThemeKeyType.dark;
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return ThemeKeyType.dark;
};
