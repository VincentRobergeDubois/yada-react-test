import { FieldState, RegisteredFieldState } from "redux-form";

import { IUser } from "model/user";

export interface IOrganisation {
  id: number;
  name: string;
  abreviation: string;
  headOffice: string;
  email: string;
  phone: string;
  extension: number;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  deletedAt?: Date;
  deletedBy?: IUser;
}

export interface IOrganisationState {
  current: IOrganisation;
  list: IOrganisation[];
}

export interface IOrganisationForm {
  name: RegisteredFieldState;
  abreviation: RegisteredFieldState;
  headOffice: RegisteredFieldState;
  email: RegisteredFieldState;
  phone: RegisteredFieldState;
  extension: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  name: FieldState;
  abreviation: FieldState;
  headOffice: FieldState;
  email: FieldState;
  phone: FieldState;
  extension: FieldState;
}

export interface IOrganisationFormValues {
  name: string;
  abreviation: string;
  headOffice: string;
  email: string;
  phone: string;
  extension: string;
}
