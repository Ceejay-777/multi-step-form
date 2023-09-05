import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Period } from "./context/periodContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Period>
      <App />
    </Period>
  </React.StrictMode>
);
