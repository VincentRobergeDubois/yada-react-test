import { FieldState, RegisteredFieldState } from "redux-form";

import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";

export interface IMenuItemForm {
  field: RegisteredFieldState;
}

export interface IMenuItemFormFields {
  field: FieldState;
}

export interface IMenuItemFormValues {
  field: string;
}

export interface ISelectedItemStruct {
  organisation: IOrganisation;
  post: IPost;
  service: IService;
  user: IUserConn;
}

export interface ISelectedListStruct {
  organisation: IOrganisation[];
  post: IPost[];
  service: IService[];
  user: IUser[];
}

export interface IIsFormStruct {
  organisation: boolean;
  post: boolean;
  service: boolean;
  user: boolean;
}
