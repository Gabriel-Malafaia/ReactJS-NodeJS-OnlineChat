import "react-toastify/dist/ReactToastify.css";
import theme from "./styles/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer />
        <CssBaseline />
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
