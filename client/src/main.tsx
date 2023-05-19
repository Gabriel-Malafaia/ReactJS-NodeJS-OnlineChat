import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
