import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//IMPORT SASS
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
