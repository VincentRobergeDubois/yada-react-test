import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "reducer";
import Router from "router";

import "../style/app.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById("root"),
);
