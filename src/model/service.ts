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
  list: IService[];
}
