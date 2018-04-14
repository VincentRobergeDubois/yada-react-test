import { FieldState, RegisteredFieldState } from "redux-form";

import { IOrganisation } from "model/organisation";

export interface IUser {
  id: number;
  username: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  admin: number;
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
  admin: number;
}

export interface IUserState {
  current: IUserConn;
  isForm: boolean;
  list: IUser[];
}

export interface IUserForm {
  username: RegisteredFieldState;
  lastname: RegisteredFieldState;
  firstname: RegisteredFieldState;
  email: RegisteredFieldState;
  phone: RegisteredFieldState;
}

export interface IUserFormFields {
  username: FieldState;
  lastname: FieldState;
  firstname: FieldState;
  email: FieldState;
  phone: FieldState;
}

export interface IUserFormValues {
  username: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

export interface IPassword {
  hash: string;
  salt: string;
  keyLength: number;
  hashMethod: string;
  iterations: number;
}
