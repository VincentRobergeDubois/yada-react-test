import { IMenuItem } from "model/menu-item";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser } from "model/user";
import { FormEvent } from "react";

export interface IManagerDetail<T> {
  item: T;
}

export interface IManagerDisplay<T> {
  onClick: (event: FormEvent<HTMLElement>) => void;
  item: T;
}

export interface IManagerForm<T> {
  initialValues?: T;
}

export type TManagerItem = IMenuItem | IPost | IService | IUser;
