import { IMenuItemAction, LOAD_MENU_ITEM, LOAD_MENU_ITEM_LIST } from 'action';

const INITIAL_STATE = {
  menuItem: {},
  menuItemList: []
};

export default (state: any = INITIAL_STATE, action: IMenuItemAction) => {
  switch (action.type) {
    case LOAD_MENU_ITEM:
      return { ...state, menuItem: action.payload };
    case LOAD_MENU_ITEM_LIST:
      return { ...state, menuItemList: action.payload };
    default:
      return state;
  }
}
