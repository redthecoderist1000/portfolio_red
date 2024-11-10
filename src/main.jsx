import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
