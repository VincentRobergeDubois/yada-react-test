import { MenuItemAction } from '../action';

type TMenuItem = MenuItemAction.IMenuItem;

interface IMenuItemAction {
  type: string,
  payload: TMenuItem | TMenuItem[]
}

const menuItem: TMenuItem = null;
const menuItemList: TMenuItem[] = [];

const INITIAL_STATE = { menuItem: menuItem, menuItemList: menuItemList };

export default function(state = INITIAL_STATE, action: IMenuItemAction) {
  switch (action.type) {
    case MenuItemAction.LOAD_MENU_ITEM:
      return { ...state, menuItem: action.payload };
    case MenuItemAction.LOAD_MENU_ITEM_LIST:
      return { ...state, menuItemList: action.payload };
    default:
      return state;
  }
}
