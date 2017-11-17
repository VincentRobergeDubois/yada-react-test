export const LOAD_MENU_ITEM = 'LOAD_MENU_ITEM';
export const LOAD_MENU_ITEM_LIST = 'LOAD_MENU_ITEMS';

export interface IMenuItem {
  id: number,
  name: string,
  icon: string,
  link: string
}

export const loadMenuItem = (menuItem: IMenuItem) => {
  return { type: LOAD_MENU_ITEM, payload: menuItem };
}

export const loadMenuItemList = (menuItemList: IMenuItem[]) => {
  return { type: LOAD_MENU_ITEM_LIST, payload: menuItemList };
}
