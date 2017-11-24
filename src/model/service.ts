import { IUser } from './user';

export interface IService {
  id: number;
  name: string;
  description:string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}
