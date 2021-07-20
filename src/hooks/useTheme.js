import { useContext } from "react";
import { ThemeContext } from "src/styles/theme/themeContext";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("Theme context undefined");
  }

  const { theme } = themeContext;

  return {
    isDark: theme === "dark",
  };
};
