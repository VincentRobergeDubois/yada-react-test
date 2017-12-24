import { IUser } from "model/user";

export interface IOrganisation {
  id: number;
  name: string;
  abreviation: string;
  headOffice: string;
  email: string;
  phone: number;
  extension: number;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IOrganisationState {
  current: IOrganisation;
  list: IOrganisation[];
}
