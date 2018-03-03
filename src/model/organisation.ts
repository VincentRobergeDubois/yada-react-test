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
  isForm: boolean;
  list: IOrganisation[];
}

export interface IOrganisationForm {
  field: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  field: FieldState;
}

export interface IOrganisationFormValues {
  field: string;
}
