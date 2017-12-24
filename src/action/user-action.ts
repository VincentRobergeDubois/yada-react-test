import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_LIST = "LOAD_USER_LIST";
export const LOGOUT = "LOGOUT";

const END_POINT_URL = "http://localhost:3000/users/";

export interface IUserAction {
  type: string;
  payload?: IUserConn | IUser[];
}

interface IUserResponse {
  data: IUserConn | IUser[];
  error: any;
  status: string;
}

const resolve = (type: string, data: IUserConn | IUser[]): IUserAction => {
  return { type, payload: data };
};

export const loadUser = (userId: number) => {
  return (dispatch: Dispatch<IState>) => {
    axios.get(`${END_POINT_URL}${userId}`).then((response: AxiosResponse<IUserResponse>) => {
      dispatch(resolve(LOAD_USER, response.data.data));
    });
  };
};

export const loadUserList = () => {
  return (dispatch: Dispatch<IState>) => {
    axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IUserResponse>) => {
      dispatch(resolve(LOAD_USER_LIST, response.data.data));
    });
  };
};

export const logout = (): IUserAction => {
  return { type: LOGOUT };
};
