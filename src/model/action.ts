import { AxiosError } from "axios";
import { ThunkDispatch } from "redux-thunk";

import { IBook } from "model/book";
import { IMenuItem } from "model/menu-item";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";
import { IAuthor } from "./author";
import { IState } from "./state";

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

export type TDispatch<T> = ThunkDispatch<IState, void, IAction<T>>;
