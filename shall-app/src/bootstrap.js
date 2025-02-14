import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
