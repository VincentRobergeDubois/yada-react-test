import { AxiosError } from "axios";

import { IMenuItem } from "model/menu-item";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";

export type TMenuItemAction = IMenuItem | IMenuItem[];
export type TOrganisationAction = boolean | IOrganisation | IOrganisation[];
export type TPostAction = boolean | IPost | IPost[];
export type TServiceAction = boolean | IService | IService[];
export type TUserAction = boolean | IUserConn | IUser[];

export interface IAction<I> {
  type: string;
  payload?: I;
}

export interface IResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}
