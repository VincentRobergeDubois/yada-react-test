import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "reducer";
import Router from "router";

import "../style/app.scss";

// tslint:disable
const risi = require("redux-immutable-state-invariant");
// tsling:enable

const middleware = process.env.NODE_ENV !== "production" ? [risi.default(), ReduxThunk] : [ReduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById("root"),
);
