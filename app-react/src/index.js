import React from "react";
import { createRoot } from "react-dom/client"; // Importez createRoot
import App from "./App";
import "./style/index.css";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/index.js";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// Utilisation de createRoot pour rendre votre application
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
