import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { Provider } from "react-redux";

const store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
