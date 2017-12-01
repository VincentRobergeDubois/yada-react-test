import { IRight } from "model/right";
import { IService } from "model/service";
import { IUser } from "model/user";

export interface IMenuItem {
  id: number;
  name: string;
  icon: string;
  link: string;
  menu?: number;
  order?: number;
  service?: IService;
  right?: IRight;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}
