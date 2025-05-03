"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ReactNode } from "react";

export default function MuiProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#1D4ED8" },
      secondary: { main: "#F43F5E" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
