import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IMenuItemFormValues } from "container/admin-section/model";
import { IAction, IResponse } from "model/action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";

export const ADMIN_MENU_ITEM_LIST_PARSE = "ADMIN_MENU_ITEM_LIST_PARSE";
export const MAIN_MENU_ITEM_LIST_PARSE = "MAIN_MENU_ITEM_LIST_PARSE";
export const MENU_ITEM_PARSE = "MENU_ITEM_PARSE";

const END_POINT_URL = "http://localhost:3000/menuItems/";

export const parseMenuItem = (item: IMenuItem): IAction<IMenuItem> => {
  return { type: MENU_ITEM_PARSE, payload: item };
};

export const parseMainMenuItemList = (list: IMenuItem[]): IAction<IMenuItem[]> => {
  return { type: MAIN_MENU_ITEM_LIST_PARSE, payload: list };
};

export const parseAdminMenuItemList = (list: IMenuItem[]): IAction<IMenuItem[]> => {
  return { type: ADMIN_MENU_ITEM_LIST_PARSE, payload: list };
};

export const loadMenuItem = (menuItemId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}/${menuItemId}`).then(
      (response: AxiosResponse<IResponse<IMenuItem>>) => {
        dispatch(parseMenuItem(response.data.data));
      },
    );
  };
};

export const loadMainMenuItemList = (menuId: number, userRight: number, admin: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseMainMenuItemList(response.data.data));
      },
    );
  };
};

export const loadAdminMenuItemList = (menuId: number, userRight: number, admin: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseAdminMenuItemList(response.data.data));
      },
    );
  };
};

export const createAdminMenuItem = (formData: IMenuItemFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseAdminMenuItemList(response.data.data));
      },
    );
  };
};

export const updateAdminMenuItem = (formData: IMenuItemFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseAdminMenuItemList(response.data.data));
      },
    );
  };
};

export const createMainMenuItem = (formData: IMenuItemFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseMainMenuItemList(response.data.data));
      },
    );
  };
};

export const updateMainMenuItem = (formData: IMenuItemFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parseMainMenuItemList(response.data.data));
      },
    );
  };
};
