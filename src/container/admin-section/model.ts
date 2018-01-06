import { FieldState, RegisteredFieldState } from "redux-form";

export interface IUserForm {
  field: RegisteredFieldState;
}

export interface IUserFormFields {
  field: FieldState;
}

export interface IUserFormValues {
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

export interface IOrganisationForm {
  field: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  field: FieldState;
}

export interface IOrganisationFormValues {
  field: string;
}
