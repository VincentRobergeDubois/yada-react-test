import { IMenuItemAction, LOAD_MENU_ITEM, LOAD_MENU_ITEM_LIST, RESET_MENU_ITEM_LIST } from "action/menu-item-action";
import { IMenuItem } from "model/menu-item";

interface IMenuItemReducerState {
  menuItem: IMenuItem;
  menuItemList: IMenuItem[];
}

export const INITIAL_MENU_ITEM_STATE = {
  menuItem: { id: 0, name: "", icon: "", link: "" },
  menuItemList: [],
};

export default (state: IMenuItemReducerState = INITIAL_MENU_ITEM_STATE, action: IMenuItemAction) => {
  switch (action.type) {
    case LOAD_MENU_ITEM:
      return { ...state, menuItem: action.payload };
    case LOAD_MENU_ITEM_LIST:
      return { ...state, menuItemList: action.payload };
    case RESET_MENU_ITEM_LIST:
      return { ...state, menuItemList: action.payload };
    default:
      return state;
  }
};
