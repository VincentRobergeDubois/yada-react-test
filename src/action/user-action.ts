import axios, { AxiosError, AxiosResponse } from "axios";
// import credential = require("credential");
import { Dispatch } from "redux";

import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";
import { loadMenuItemList } from "action/menu-item-action";

export const LOGOUT = "LOGOUT";

export const USER_PARSE = "USER_PARSE";
export const USER_LIST_PARSE = "USER_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/users/";

export interface IUserAction {
  type: string;
  payload?: IUserConn | IUser | IUser[];
}

interface IUserResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const parseUser = (user: IUserConn) => {
  return { type: USER_PARSE, payload: user };
};

export const parseUserList = (list: IUser[]) => {
  return { type: USER_LIST_PARSE, payload: list };
};

export const loadUser = (userId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${userId}`).then((response: AxiosResponse<IUserResponse<IUserConn>>) => {
      dispatch(parseUser(response.data.data));
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
      dispatch(loadMenuItemList(1, 1, 1));
    });
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const createUser = (user: IUser) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, user).then((response: AxiosResponse<any>) => {
      dispatch(loadUserList());
    });
  };
};
