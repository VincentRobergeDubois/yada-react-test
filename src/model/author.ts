import { FieldState, RegisteredFieldState } from "redux-form";

import { IUser } from "./user";

export interface IAuthorState {
  current: IAuthor;
  list: IAuthor[];
}

export interface IAuthor {
  lastname: string;
  firstname: string;
  description: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  deletedAt?: Date;
  deletedBy?: IUser;
}

export interface IAuthorForm {
  lastname: RegisteredFieldState;
  firstname: RegisteredFieldState;
  description: RegisteredFieldState;
}

export interface IAuthorFormFields {
  lastname: FieldState;
  firstname: FieldState;
  description: FieldState;
}

export interface IAuthorFormValues {
  lastname: string;
  firstname: string;
  description: string;
}
