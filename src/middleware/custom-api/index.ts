import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { IState } from "model/state";

export const apiMiddleware: Middleware =
(api: MiddlewareAPI<any>) =>
(next: Dispatch<IState>) =>
(action: any) => {
  if (action.type === "API") {
    // console.log(action.payload);
  }
  next(action);
};
