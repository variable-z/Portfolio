import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Global styles
import App from "./App"; // Main App component

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
