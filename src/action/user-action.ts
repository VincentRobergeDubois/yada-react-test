import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { loadMenuItemList, parseAdminMenuItemList, parseMainMenuItemList } from "action/menu-item-action";
import { loadStructureAdmin } from "action/structure-admin";
import { IAction, IResponse, TDispatch } from "model/action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";
import { IUser, IUserConn, IUserFormValues } from "model/user";
import { getCurrentUserId } from "selector/user";

export const LOGOUT = "LOGOUT";

export const CURRENT_USER_PARSE = "CURRENT_USER_PARSE";
export const USER_LIST_PARSE = "USER_LIST_PARSE";

const END_POINT_URL = "users/";

export const parseCurrentUser = (user: IUserConn): IAction<IUserConn> => (
  { type: CURRENT_USER_PARSE, payload: user }
);

export const parseUserList = (list: IUser[]): IAction<IUser[]> => (
  { type: USER_LIST_PARSE, payload: list }
);

export const loadUser = (userId: number) => {
  return (dispatch: TDispatch<IUserConn>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${userId}`).then(
      (response: AxiosResponse<IResponse<IUserConn>>) => {
        dispatch(parseCurrentUser(response.data.data));
        dispatch(loadMenuItemList(1, 1, parseMainMenuItemList));
        if (response.data.data.admin) {
          dispatch(loadStructureAdmin());
          dispatch(loadMenuItemList(4, 1, parseAdminMenuItemList));
        }
      },
    );
  };
};

export const loadUserList = () => {
  return (dispatch: TDispatch<IUser[]>): Promise<void> => {
    return axios.get(BASE_URL + END_POINT_URL).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const createUser = (formValues: IUserFormValues) => {
  return (dispatch: TDispatch<IUser[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(BASE_URL + END_POINT_URL, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const updateUser = (formValues: IUserFormValues, id: number) => {
  return (dispatch: TDispatch<IUser[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const deleteUser = (id: number) => {
  return (dispatch: TDispatch<IUser[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const login = (username: string, password: string) => {
  return (dispatch: TDispatch<IUserConn>): Promise<void> => {
    return axios.patch(`${BASE_URL}${END_POINT_URL}login`, { username, password }).then(
      (response: AxiosResponse<IResponse<IUserConn>>) => {
        dispatch(parseCurrentUser(response.data.data));
        dispatch(loadMenuItemList(1, 1, parseMainMenuItemList));
        if (response.data.data.admin) {
          dispatch(loadStructureAdmin());
          dispatch(loadMenuItemList(4, 1, parseAdminMenuItemList));
        }
      },
    );
  };
};

export const logout = () => {
  return (dispatch: TDispatch<IMenuItem[]>): void => {
    dispatch({ type: LOGOUT });
    dispatch(loadMenuItemList(1, 6, parseMainMenuItemList));
  };
};
