import { FieldState, RegisteredFieldState } from "redux-form";

export interface ILoginForm {
  username: RegisteredFieldState;
  password: RegisteredFieldState;
}

export interface ILoginFormFields {
  username: FieldState;
  password: FieldState;
}

export interface ILoginFormValues {
  username: string;
  password: string;
}
