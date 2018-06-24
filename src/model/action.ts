import { AxiosError } from "axios";

import { IBook } from "model/book";
import { IMenuItem } from "model/menu-item";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";
import { IAuthor } from "./author";

export type TMenuItemAction = IMenuItem | IMenuItem[];
export type TOrganisationAction = IOrganisation | IOrganisation[];
export type TPostAction = IPost | IPost[];
export type TServiceAction = IService | IService[];
export type TUserAction = IUserConn | IUser[];
export type TBookAction = IBook | IBook[];
export type TAuthorAction = IAuthor | IAuthor[];

export interface IAction<I> {
  type: string;
  payload?: I;
}

export interface IResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}
