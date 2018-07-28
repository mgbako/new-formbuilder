import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import React from "react";
import App from "./App";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
