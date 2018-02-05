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
