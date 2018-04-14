import { createSelector } from "reselect";

import { IMenuItem, IMenuItemState } from "model/menu-item";
import { IState } from "model/state";

export const getMenuItem = (state: IState): IMenuItemState => state.menuItem;

export const getCurrentMenuItem = createSelector(
  getMenuItem, ({ current }: IMenuItemState): IMenuItem => current,
);

export const getMainMenuItemList = createSelector(
  getMenuItem, ({ mainMenuList }: IMenuItemState): IMenuItem[] => mainMenuList,
);

export const getAdminMenuItemList = createSelector(
  getMenuItem, ({ adminMenuList }: IMenuItemState): IMenuItem[] => adminMenuList,
);
