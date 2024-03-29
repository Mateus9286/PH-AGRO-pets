import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Providers/CartContext.tsx";
import { ContextProviders } from "./Providers/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ContextProviders>
          <App />
        </ContextProviders>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
