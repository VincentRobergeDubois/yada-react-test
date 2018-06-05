import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { BASE_URL } from "action";
import { IAction, IResponse } from "model/action";
import { IMenuItem, IMenuItemFormValues, TMenuItemListParse } from "model/menu-item";
import { IState } from "model/state";
import { getCurrentUserAdmin, getCurrentUserId } from "selector/user";

export const ADMIN_MENU_ITEM_LIST_PARSE = "ADMIN_MENU_ITEM_LIST_PARSE";
export const MAIN_MENU_ITEM_LIST_PARSE = "MAIN_MENU_ITEM_LIST_PARSE";
export const MENU_ITEM_PARSE = "MENU_ITEM_PARSE";

const END_POINT_URL = "menuItems/";

export const parseMenuItem = (item: IMenuItem): IAction<IMenuItem> => (
  { type: MENU_ITEM_PARSE, payload: item }
);

export const parseMainMenuItemList = (list: IMenuItem[]): IAction<IMenuItem[]> => (
  { type: MAIN_MENU_ITEM_LIST_PARSE, payload: list }
);

export const parseAdminMenuItemList = (list: IMenuItem[]): IAction<IMenuItem[]> => (
  { type: ADMIN_MENU_ITEM_LIST_PARSE, payload: list }
);

export const loadMenuItem = (menuItemId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}/${menuItemId}`).then(
      (response: AxiosResponse<IResponse<IMenuItem>>) => {
        dispatch(parseMenuItem(response.data.data));
      },
    );
  };
};

export const loadMenuItemList = (menuId: number, userRight: number, parse: TMenuItemListParse) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const admin = getCurrentUserAdmin(getState());
    return axios.get(`${BASE_URL}${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parse(response.data.data));
      },
    );
  };
};

export const createMenuItem = (formData: IMenuItemFormValues, parse: TMenuItemListParse) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parse(response.data.data));
      },
    );
  };
};

export const updateMenuItem = (formData: IMenuItemFormValues, id: number, parse: TMenuItemListParse) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IMenuItem[]>>) => {
        dispatch(parse(response.data.data));
      },
    );
  };
};
