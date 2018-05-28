import { createSelector } from "reselect";

import { IState } from "model/state";
import { IUser, IUserAdmin, IUserConn, IUserState } from "model/user";

export const getUser = (state: IState): IUserState => state.user;

export const getCurrentUser = createSelector(
  getUser, ({ current }: IUserState): IUserConn => current,
);

export const getCurrentUserAdmin = createSelector(
  getCurrentUser, ({ admin }: IUserConn): boolean => admin,
);

export const getUserList = createSelector(
  getUser, ({ list }: IUserState): IUser[] => list,
);

export const getIsUserForm = createSelector(
  getUser, ({ isForm }: IUserState): boolean => isForm,
);

export const getAdminUserList = createSelector(
  getUserList, (userList: IUser[]): IUserAdmin[] => {
    return userList.filter((user: IUser) => user.admin).map((user: IUser): IUserAdmin => {
      return {
        email: user.email,
        name: user.firstname + " " + user.lastname,
        title: "Consultant",
      };
    });
  },
);
