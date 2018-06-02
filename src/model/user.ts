import { FieldState, RegisteredFieldState } from "redux-form";

import { IOrganisation } from "model/organisation";

export interface IUser {
  id: number;
  username: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  admin: boolean;
  hash?: string;
  salt?: string;
  keyLength: number;
  hashMethod: string;
  iterations: number;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IUserConn {
  id: number;
  title: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  organisationList: IOrganisation[];
  abreviation: string;
  admin: boolean;
}

export interface IUserAdmin {
  name: string;
  title: string;
  email: string;
}

export interface IUserState {
  current: IUserConn;
  list: IUser[];
}

export interface IUserForm {
  username: RegisteredFieldState;
  password: RegisteredFieldState;
  lastname: RegisteredFieldState;
  firstname: RegisteredFieldState;
  email: RegisteredFieldState;
  phone: RegisteredFieldState;
}

export interface IUserFormFields {
  username: FieldState;
  password: FieldState;
  lastname: FieldState;
  firstname: FieldState;
  email: FieldState;
  phone: FieldState;
}

export interface IUserFormValues {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}
