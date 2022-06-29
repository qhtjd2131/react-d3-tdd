import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
