import { IMenuItem } from "model/menu-item";

export const LOAD_MENU_ITEM = "LOAD_MENU_ITEM";
export const LOAD_MENU_ITEM_LIST = "LOAD_MENU_ITEM_LIST";
export const RESET_MENU_ITEM_LIST = "RESET_MENU_ITEM_LIST";

export interface IMenuItemAction {
  type: string;
  payload: IMenuItem[];
}

interface IMenuItemResponse {
  status: number;
  error: any;
  data: IMenuItem[];
}

export const loadMenuItem = (response: IMenuItemResponse): IMenuItemAction => {
  return { type: LOAD_MENU_ITEM, payload: response.data };
};

export const loadMenuItemList = (response: IMenuItemResponse): IMenuItemAction => {
  return { type: LOAD_MENU_ITEM_LIST, payload: response.data };
};

export const resetMenuItemList = (response: IMenuItemResponse): IMenuItemAction => {
  return { type: RESET_MENU_ITEM_LIST, payload: response.data };
};
