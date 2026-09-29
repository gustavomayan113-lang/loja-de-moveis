import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./statics/css/base.css";
import "./statics/css/sections.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
