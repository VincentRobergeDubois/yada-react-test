import { FieldState, RegisteredFieldState } from "redux-form";

export interface IPostForm {
  field: RegisteredFieldState;
}

export interface IPostFormFields {
  field: FieldState;
}

export interface IPostFormValues {
  field: string;
}
