import { IMenuItem, IMenuItemFormValues } from "model/menu-item";
import { IPost, IPostFormValues } from "model/post";
import { IService, IServiceFormValues } from "model/service";
import { IUser, IUserFormValues } from "model/user";

export type TManagerItem = IMenuItem | IPost | IService | IUser;
export type TManagerFormValues = IMenuItemFormValues | IPostFormValues | IServiceFormValues | IUserFormValues;

export interface IManagerDetail<T> {
  item: T;
}

export interface IManagerDisplay<T> {
  onClick: (event: React.FormEvent<HTMLElement>) => void;
  item: T;
}

export interface IManagerForm<T, FV> {
  handleForm: () => (formValues: FV) => void;
  initialValues?: Partial<T>;
}
