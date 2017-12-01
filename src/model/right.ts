import { IUser } from "model/user";

export interface IRight {
  id: number;
  title: string;
  level: number;
  description: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}
