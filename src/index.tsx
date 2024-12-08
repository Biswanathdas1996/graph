import React from "react";
import App from "./App";
import "./App.css";
import { HashRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

const rootElement = document.getElementById("app");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
} else {
  console.error("Failed to find the root element");
}
