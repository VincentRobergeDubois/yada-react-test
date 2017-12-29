import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_LIST = "LOAD_USER_LIST";

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

export const loadUser = (userId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${userId}`).then((response: AxiosResponse<IUserResponse<IUserConn>>) => {
      dispatch({ type: LOAD_USER, payload: response.data.data });
    });
  };
};

export const loadUserList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IUserResponse<IUser[]>>) => {
      dispatch({ type: LOAD_USER_LIST, payload: response.data.data });
    });
  };
};

export const connection = (username: string, password: string) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}username/${username}`).then((response: AxiosResponse<IUserResponse<IUser>>) => {
      dispatch(loadUser(response.data.data.id));
    });
  };
};
