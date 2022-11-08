import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router as RouterPage } from "./router/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouterPage />
      </Router>
    </Provider>
  </React.StrictMode>
);
