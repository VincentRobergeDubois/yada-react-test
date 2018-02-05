import axios, { AxiosResponse } from "axios";
// import credential = require("credential");
import { Dispatch } from "redux";

import { loadMenuItemList, parseAdminMenuItemList, parseMainMenuItemList } from "action/menu-item-action";
import { loadStructureAdmin } from "action/structure-admin";
import { IUserFormValues } from "container/user-manager/model";
import { IAction, IResponse } from "model/action";
import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";

export const LOGOUT = "LOGOUT";

export const CURRENT_USER_PARSE = "CURRENT_USER_PARSE";
export const IS_USER_FORM_PARSE = "IS_USER_FORM_PARSE";
export const USER_LIST_PARSE = "USER_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/users/";

export const parseCurrentUser = (user: IUserConn): IAction<IUserConn> => {
  return { type: CURRENT_USER_PARSE, payload: user };
};

export const parseIsUserForm = (isForm: boolean): IAction<boolean> => {
  return { type: IS_USER_FORM_PARSE, payload: isForm };
};

export const parseUserList = (list: IUser[]): IAction<IUser[]> => {
  return { type: USER_LIST_PARSE, payload: list };
};

export const loadUser = (userId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${userId}`).then((response: AxiosResponse<IResponse<IUserConn>>) => {
      dispatch(parseCurrentUser(response.data.data));
      if (response.data.data.admin === 1) {
        dispatch(loadStructureAdmin());
      }
    });
  };
};

export const loadUserList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IResponse<IUser[]>>) => {
      dispatch(parseUserList(response.data.data));
    });
  };
};

export const createUser = (formData: IUserFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const updateUser = (formData: IUserFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}username/${username}`).then((response: AxiosResponse<IResponse<IUser>>) => {
      dispatch(loadUser(response.data.data.id));
      dispatch(loadMenuItemList(1, 1, 1, parseMainMenuItemList));
      dispatch(loadMenuItemList(4, 1, 1, parseAdminMenuItemList));
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<IState>): void => {
    dispatch({ type: LOGOUT });
    dispatch(loadMenuItemList(1, 6, 1, parseMainMenuItemList));
  };
};
