import { FieldState, RegisteredFieldState } from "redux-form";

import { IUser } from "./user";

export interface IBookState {
  current: IBook;
  list: IBook[];
}

export interface IBook {
  title: string;
  description: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  deletedAt?: Date;
  deletedBy?: IUser;
}

export interface IOrganisationForm {
  title: RegisteredFieldState;
  description: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  title: FieldState;
  description: FieldState;
}

export interface IBookFormValues {
  title: string;
  description: string;
}
