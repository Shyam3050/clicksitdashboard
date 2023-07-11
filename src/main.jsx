import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { ItemsContextProvider } from "./component/context/ItemsContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
