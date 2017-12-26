import { IOrganisation } from "model/organisation";

export interface IUser {
  id: number;
  hash?: string;
  username: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  admin: number;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IUserConn {
  id: number;
  title: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  organisationList: IOrganisation[];
  abreviation: string;
  admin: number;
}

export interface IUserState {
  current: IUserConn;
  list: IUser[];
}
