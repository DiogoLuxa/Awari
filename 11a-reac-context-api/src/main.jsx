import React from "react";
import ReactDOM from "react-dom/client";

// context
import { PokedexProvider } from "./context/PokedexContext.jsx";

// components
import App from "./App.jsx";

// styles
import "./index.css";

// render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </React.StrictMode>
);
