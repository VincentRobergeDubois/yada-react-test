import { AxiosError } from "axios";
import { ThunkDispatch } from "redux-thunk";

import { IAuthor } from "model/author";
import { IBook } from "model/book";
import { IEditor } from "model/editor";
import { IMenuItem } from "model/menu-item";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IState } from "model/state";
import { IUser, IUserConn } from "model/user";

export type TAuthorAction = IAuthor | IAuthor[];
export type TBookAction = IBook | IBook[];
export type TEditorAction = IEditor | IEditor[];
export type TMenuItemAction = IMenuItem | IMenuItem[];
export type TOrganisationAction = IOrganisation | IOrganisation[];
export type TPostAction = IPost | IPost[];
export type TServiceAction = IService | IService[];
export type TUserAction = IUserConn | IUser[];

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
