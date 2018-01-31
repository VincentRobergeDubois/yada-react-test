import { createSelector } from "reselect";

import { IMenuItem, IMenuItemState } from "model/menu-item";
import { IState } from "model/state";

export const getMenuItem = (state: IState): IMenuItemState => state.menuItem;

export const getCurrentMenuItem = createSelector(
  getMenuItem,
  (menuItem: IMenuItemState): IMenuItem => {
    return menuItem.current;
  },
);

export const getMainMenuItemList = createSelector(
  getMenuItem,
  (menuItem: IMenuItemState): IMenuItem[] => {
    return menuItem.mainMenuList;
  },
);

export const getAdminMenuItemList = createSelector(
  getMenuItem,
  (menuItem: IMenuItemState): IMenuItem[] => {
    return menuItem.adminMenuList;
  },
);
