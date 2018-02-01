import { FieldState, RegisteredFieldState } from "redux-form";

import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";

export interface IOrganisationForm {
  field: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  field: FieldState;
}

export interface IOrganisationFormValues {
  field: string;
}

export interface IPostForm {
  field: RegisteredFieldState;
}

export interface IPostFormFields {
  field: FieldState;
}

export interface IPostFormValues {
  field: string;
}

export interface IServiceForm {
  field: RegisteredFieldState;
}

export interface IServiceFormFields {
  field: FieldState;
}

export interface IServiceFormValues {
  field: string;
}

export interface IUserForm {
  field: RegisteredFieldState;
}

export interface IUserFormFields {
  field: FieldState;
}

export interface IUserFormValues {
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
