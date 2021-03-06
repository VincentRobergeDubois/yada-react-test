import { FieldState, RegisteredFieldState } from "redux-form";

import { IUser } from "model/user";

export interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IPostState {
  current: IPost;
  list: IPost[];
}

export interface IPostForm {
  title: RegisteredFieldState;
  content: RegisteredFieldState;
  image: RegisteredFieldState;
}

export interface IPostFormFields {
  title: FieldState;
  content: FieldState;
  image: FieldState;
}

export interface IPostFormValues {
  title: string;
  content: string;
  image: string;
}
