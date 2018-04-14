import { FieldState, RegisteredFieldState } from "redux-form";

import { IUser } from "model/user";

export interface IService {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IServiceState {
  current: IService;
  isForm: boolean;
  list: IService[];
}

export interface IServiceForm {
  name: RegisteredFieldState;
  description: RegisteredFieldState;
}

export interface IServiceFormFields {
  name: FieldState;
  description: FieldState;
}

export interface IServiceFormValues {
  name: string;
  description: string;
}
