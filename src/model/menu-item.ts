import { IUser } from './user';
import { IService } from './service';
import { IRight } from './right';

export interface IMenuItem {
  id: number,
  name: string,
  icon: string,
  link: string,
  menu: number,
  order: number,
  service: IService,
  right: IRight,
  createdAt: Date,
  createdBy: IUser,
  modifiedAt: Date,
  modifiedBy: IUser,
  archivedAt: Date,
  archivedBy: IUser
}
