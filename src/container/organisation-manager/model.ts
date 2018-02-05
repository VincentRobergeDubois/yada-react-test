import { FieldState, RegisteredFieldState } from "redux-form";

export interface IOrganisationForm {
  field: RegisteredFieldState;
}

export interface IOrganisationFormFields {
  field: FieldState;
}

export interface IOrganisationFormValues {
  field: string;
}