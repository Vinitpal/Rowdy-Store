import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "nprogress/nprogress.css";
import App from "./App";

import { HashRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
