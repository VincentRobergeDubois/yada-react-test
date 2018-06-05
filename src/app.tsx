import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import * as Risi from "redux-immutable-state-invariant";
import ReduxThunk from "redux-thunk";

import rootReducer from "reducer";
import Router from "router";

import "../style/app.scss";

const devMiddleware = [Risi.default(), ReduxThunk];
const prodMiddleware = [ReduxThunk];

const middleware = process.env.NODE_ENV !== "production" ? devMiddleware : prodMiddleware;
const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById("root") as HTMLElement,
);
