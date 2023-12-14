"use client";

import { ThemeContext } from "@/contexts/theme/context";

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
