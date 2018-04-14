import { createSelector } from "reselect";

import { IState } from "model/state";
import { IUser, IUserConn, IUserState } from "model/user";

export const getUser = (state: IState): IUserState => state.user;

export const getCurrentUser = createSelector(
  getUser, ({ current }: IUserState): IUserConn => current,
);

export const getUserList = createSelector(
  getUser, ({ list }: IUserState): IUser[] => list,
);

export const getIsUserForm = createSelector(
  getUser, ({ isForm }: IUserState): boolean => isForm,
);
