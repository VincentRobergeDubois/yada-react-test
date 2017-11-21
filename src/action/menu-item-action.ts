import { IMenuItem } from 'model/menu-item';

export const LOAD_MENU_ITEM = 'LOAD_MENU_ITEM';
export const LOAD_MENU_ITEM_LIST = 'LOAD_MENU_ITEMS';

export interface IMenuItemAction {
  type: string,
  payload: IMenuItem | IMenuItem[]
}

export const loadMenuItem = (menuItem: IMenuItem): IMenuItemAction => {
  return { type: LOAD_MENU_ITEM, payload: menuItem };
}

export const loadMenuItemList = (menuItemList: IMenuItem[]): IMenuItemAction => {
  return { type: LOAD_MENU_ITEM_LIST, payload: menuItemList };
}
