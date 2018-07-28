import { IBook } from "model/book";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser } from "model/user";
import { TAuthorAction, TBookAction, TOrganisationAction, TPostAction, TServiceAction, TUserAction } from "./action";
import { IAuthor } from "./author";

export interface IStructureAdmin {
  authorList: IAuthor[];
  bookList: IBook[];
  organisationList: IOrganisation[];
  postList: IPost[];
  serviceList: IService[];
  userList: IUser[];
}

export type TStructureAdminAction = TAuthorAction | TBookAction | TOrganisationAction |
  TPostAction | TServiceAction | TUserAction;
