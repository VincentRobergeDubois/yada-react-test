import { FieldState, RegisteredFieldState } from "redux-form";

import { IAction } from "model/action";
import { IRight } from "model/right";
import { IService } from "model/service";
import { IUser } from "model/user";

export type TMenuItemListParse = (list: IMenuItem[]) => IAction<IMenuItem[]>;

export interface IMenuItem {
  id: number;
  name: string;
  icon: string;
  link: string;
  menu?: number;
  order?: number;
  service?: IService;
  right?: IRight;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IMenuItemState {
  adminMenuList: IMenuItem[];
  current: IMenuItem;
  mainMenuList: IMenuItem[];
}

export interface IMenuItemForm {
  name: RegisteredFieldState;
  icon: RegisteredFieldState;
  link: RegisteredFieldState;
}

export interface IMenuItemFormFields {
  name: FieldState;
  icon: FieldState;
  link: FieldState;
}

export interface IMenuItemFormValues {
  name: string;
  icon: string;
  link: string;
}
