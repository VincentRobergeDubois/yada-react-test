import {
  ADMIN_MENU_ITEM_LIST_PARSE,
  IMenuItemAction,
  MAIN_MENU_ITEM_LIST_PARSE,
  MENU_ITEM_PARSE,
} from "action/menu-item-action";
import { LOGOUT } from "action/user-action";
import { IMenuItemState } from "model/menu-item";

const INITIAL_STATE: IMenuItemState = {
  adminMenuList: [],
  current: { id: 0, name: "", icon: "", link: "" },
  mainMenuList: [],
};

export default (state: IMenuItemState = INITIAL_STATE, action: IMenuItemAction) => {
  switch (action.type) {
    case MENU_ITEM_PARSE:
      return { ...state, current: action.payload };
    case MAIN_MENU_ITEM_LIST_PARSE:
      return { ...state, mainMenuList: action.payload };
    case ADMIN_MENU_ITEM_LIST_PARSE:
      return { ...state, adminMenuList: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
