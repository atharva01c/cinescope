import { useContext, createContext } from "react";
import type { Theme } from "../types/Theme";

export interface ThemeContextProvider {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProvider | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
