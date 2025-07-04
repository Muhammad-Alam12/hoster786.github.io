import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fancybook">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
