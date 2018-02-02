import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser } from "model/user";

export interface IStructureAdmin {
  organisationList: IOrganisation[];
  postList: IPost[];
  serviceList: IService[];
  userList: IUser[];
}
