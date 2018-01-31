import { createSelector } from "reselect";

import { IState } from "model/state";
import { IUser, IUserConn, IUserState } from "model/user";

export const getUser = (state: IState): IUserState => state.user;

export const getCurrentUser = createSelector(
  getUser,
  (user: IUserState): IUserConn => {
    return user.current;
  },
);

export const getUserList = createSelector(
  getUser,
  (user: IUserState): IUser[] => {
    return user.list;
  },
);
