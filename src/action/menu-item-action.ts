import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";

export const MENU_ITEM_PARSE = "MENU_ITEM_PARSE";
export const MENU_ITEM_LIST_PARSE = "MENU_ITEM_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/menuItems/";

export interface IMenuItemAction {
  type: string;
  payload?: IMenuItem | IMenuItem[];
}

interface IMenuItemResponse<I> {
  data: I;
  error: AxiosError;
  state: number;
}

export const parseMenuItem = (item: IMenuItem) => {
  return ({ type: MENU_ITEM_PARSE, payload: item });
};

export const parseMenuItemList = (list: IMenuItem[]) => {
  return ({ type: MENU_ITEM_LIST_PARSE, payload: list });
};

export const loadMenuItem = (menuItemId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}/${menuItemId}`).then((response: AxiosResponse<IMenuItemResponse<IMenuItem>>) => {
      dispatch(parseMenuItem(response.data.data));
    });
  };
};

export const loadMenuItemList = (menuId: number, userRight: number, admin: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IMenuItemResponse<IMenuItem[]>>) => {
        dispatch(parseMenuItemList(response.data.data));
      },
    );
  };
};
