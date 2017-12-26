import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IMenuItem } from "model/menu-item";
import { IError } from "model/response";
import { IState } from "model/state";

export const LOAD_MENU_ITEM = "LOAD_MENU_ITEM";
export const LOAD_MENU_ITEM_LIST = "LOAD_MENU_ITEM_LIST";

const END_POINT_URL = "http://localhost:3000/menuItems/";

export interface IMenuItemAction {
  type: string;
  payload?: IMenuItem | IMenuItem[];
}

interface IMenuItemResponse {
  data: IMenuItem | IMenuItem[];
  error: IError;
  status: string;
}

const resolve = (type: string, data: IMenuItem | IMenuItem[]): IMenuItemAction => {
  return { type , payload: data };
};

export const loadMenuItem = (menuItemId: number) => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}/${menuItemId}`).then((response: AxiosResponse<IMenuItemResponse>) => {
      dispatch(resolve(LOAD_MENU_ITEM, response.data.data));
    });
  };
};

export const loadMenuItemList = (menuId: number, userRight: number, admin: number) => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}${menuId}/${userRight}/${admin}`).then(
      (response: AxiosResponse<IMenuItemResponse>) => {
        dispatch(resolve(LOAD_MENU_ITEM_LIST, response.data.data),
      );
    });
  };
};
