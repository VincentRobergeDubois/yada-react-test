import { IMenuItemAction, LOAD_MENU_ITEM, LOAD_MENU_ITEM_LIST } from 'action';
import { IMenuItem } from 'model/menu-item';

const menuItem: IMenuItem = null;
const menuItemList: IMenuItem[] = [];

const INITIAL_STATE = { menuItem: menuItem, menuItemList: menuItemList };

export default function(state = INITIAL_STATE, action: IMenuItemAction) {
  switch (action.type) {
    case LOAD_MENU_ITEM:
      return { ...state, menuItem: action.payload };
    case LOAD_MENU_ITEM_LIST:
      return { ...state, menuItemList: action.payload };
    default:
      return state;
  }
}
