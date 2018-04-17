import axios, { AxiosResponse } from "axios";
import credential = require("credential");
import { Dispatch } from "redux";

import { loadMenuItemList, parseAdminMenuItemList, parseMainMenuItemList } from "action/menu-item-action";
import { loadStructureAdmin } from "action/structure-admin";
import { IAction, IResponse } from "model/action";
import { IState } from "model/state";
import { IPassword, IUser, IUserConn, IUserFormValues } from "model/user";

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
      const admin = response.data.data.admin ? 1 : 0;
      dispatch(parseCurrentUser(response.data.data));
      dispatch(loadMenuItemList(1, 1, admin, parseMainMenuItemList));
      if (response.data.data.admin) {
        dispatch(loadStructureAdmin());
        dispatch(loadMenuItemList(4, 1, admin, parseAdminMenuItemList));
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

export const createUser = (formValues: IUserFormValues) => {
  const pw = credential();
  pw.hash(generate(), (error: Error, hash: IPassword) => {
    const body = {
      admin: 1,
      email: formValues.email,
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      phone: formValues.phone,
      username: formValues.username,
      ...hash,
    };
    return (dispatch: Dispatch<IState>): Promise<void> => {
      return axios.post(`${END_POINT_URL}`, body).then(
        (response: AxiosResponse<IResponse<IUser[]>>) => {
          dispatch(parseUserList(response.data.data));
        },
      );
    };
  });
};

export const updateUser = (formValues: IUserFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formValues).then(
      (response: AxiosResponse<IResponse<IUser[]>>) => {
        dispatch(parseUserList(response.data.data));
      },
    );
  };
};

export const deleteUser = (id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.delete(`${END_POINT_URL}${id}`).then(
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
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<IState>): void => {
    dispatch({ type: LOGOUT });
    dispatch(loadMenuItemList(1, 6, 0, parseMainMenuItemList));
  };
};
