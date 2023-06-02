import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </ContextProvider>
  </React.StrictMode>
);
