import { IMenuItemAction, MENU_ITEM_LIST_PARSE, MENU_ITEM_PARSE } from "action/menu-item-action";
import { LOGOUT } from "action/user-action";
import { IMenuItemState } from "model/menu-item";

const INITIAL_STATE: IMenuItemState = {
  current: { id: 0, name: "", icon: "", link: "" },
  list: [],
};

export default (state: IMenuItemState = INITIAL_STATE, action: IMenuItemAction) => {
  switch (action.type) {
    case MENU_ITEM_PARSE:
      return { ...state, current: action.payload };
    case MENU_ITEM_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
