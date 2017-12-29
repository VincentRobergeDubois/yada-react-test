import { IMenuItemAction, LOAD_MENU_ITEM, LOAD_MENU_ITEM_LIST, LOGOUT } from "action/menu-item-action";
import { IMenuItemState } from "model/menu-item";

const INITIAL_STATE: IMenuItemState = {
  current: { id: 0, name: "", icon: "", link: "" },
  list: [],
};

export default (state: IMenuItemState = INITIAL_STATE, action: IMenuItemAction) => {
  switch (action.type) {
    case LOAD_MENU_ITEM:
      return { ...state, current: action.payload };
    case LOAD_MENU_ITEM_LIST:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
