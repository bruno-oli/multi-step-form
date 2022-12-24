import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StepProvider from "./contexts/StepContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>
);
