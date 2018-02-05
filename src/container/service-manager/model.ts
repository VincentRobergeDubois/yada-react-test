import { FieldState, RegisteredFieldState } from "redux-form";

export interface IServiceForm {
  field: RegisteredFieldState;
}

export interface IServiceFormFields {
  field: FieldState;
}

export interface IServiceFormValues {
  field: string;
}
