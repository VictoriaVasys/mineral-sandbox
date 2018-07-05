import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "mineral-ui/themes";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
