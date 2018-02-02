import axios, { AxiosError, AxiosResponse } from "axios";
// import credential = require("credential");
import { Dispatch } from "redux";

import { loadAdminMenuItemList, loadMainMenuItemList } from "action/menu-item-action";
import { loadStructureAdmin } from "action/structure-admin";
import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";

export const LOGOUT = "LOGOUT";

export const CURRENT_USER_PARSE = "CURRENT_USER_PARSE";
export const IS_USER_FORM_PARSE = "IS_USER_FORM_PARSE";
export const USER_LIST_PARSE = "USER_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/users/";

export interface IUserAction {
  type: string;
  payload?: boolean | IUserConn | IUser | IUser[];
}

interface IUserResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const parseCurrentUser = (user: IUserConn): IUserAction => {
  return { type: CURRENT_USER_PARSE, payload: user };
};

export const parseIsUserForm = (isForm: boolean): IUserAction => {
  return { type: IS_USER_FORM_PARSE, payload: isForm };
};

export const parseUserList = (list: IUser[]): IUserAction => {
  return { type: USER_LIST_PARSE, payload: list };
};

export const loadUser = (userId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${userId}`).then((response: AxiosResponse<IUserResponse<IUserConn>>) => {
      dispatch(parseCurrentUser(response.data.data));
      if (response.data.data.admin === 1) {
        dispatch(loadStructureAdmin());
      }
    });
  };
};

export const loadUserList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IUserResponse<IUser[]>>) => {
      dispatch(parseUserList(response.data.data));
    });
  };
};

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}username/${username}`).then((response: AxiosResponse<IUserResponse<IUser>>) => {
      dispatch(loadUser(response.data.data.id));
      dispatch(loadMainMenuItemList(1, 1, 1));
      dispatch(loadAdminMenuItemList(4, 1, 1));
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<IState>): void => {
    dispatch({ type: LOGOUT });
    dispatch(loadMainMenuItemList(1, 6, 1));
  };
};

export const createUser = (user: IUser) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, user).then((response: AxiosResponse<any>) => {
      dispatch(loadUserList());
    });
  };
};
