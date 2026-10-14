
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter } from "react-router";
import App from "./App.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Ícones Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// CSS do projeto
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HashRouter>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      >
        <App />
      </GoogleOAuthProvider>
    </HashRouter>
  </React.StrictMode>
);
