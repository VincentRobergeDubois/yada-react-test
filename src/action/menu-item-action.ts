import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";

export const LOAD_MENU_ITEM = "LOAD_MENU_ITEM";
export const LOAD_MENU_ITEM_LIST = "LOAD_MENU_ITEM_LIST";
export const LOGOUT = "LOGOUT";

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

export const loadMenuItem = (menuItemId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}/${menuItemId}`).then((response: AxiosResponse<IMenuItemResponse<IMenuItem>>) => {
      dispatch({ type: LOAD_MENU_ITEM, payload: response.data.data });
    });
  };
};

export const loadMenuItemList = (menuId: number, userRight: number, admin: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IMenuItemResponse<IMenuItem[]>>) => {
        dispatch({ type: LOAD_MENU_ITEM_LIST, payload: response.data.data },
      );
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}1/6/0`).then((response: AxiosResponse<IMenuItemResponse<IMenuItem[]>>) => {
      dispatch({ type: LOGOUT, payload: response.data.data });
    });
  };
};
