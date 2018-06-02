import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { ThunkAction } from "redux-thunk";

export const API = "API_ASYNC_CALL";

export const asyncApi: Middleware = (api: MiddlewareAPI<any>) => (next: Dispatch<any>) =>
(action: ThunkAction<any, any, any>) => {
  if (!action[API]) { return next(action); }
  return next(action);
};
