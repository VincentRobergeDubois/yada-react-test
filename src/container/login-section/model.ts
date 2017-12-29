import { FieldState, RegisteredFieldState } from "redux-form";

export interface ILoginSectionForm {
  username: RegisteredFieldState;
  password: RegisteredFieldState;
}

export interface ILoginSectionFields {
  username: FieldState;
  password: FieldState;
}

export interface ILoginSectionValues {
  username: string;
  password: string;
}
