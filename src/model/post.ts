import { IUser } from "model/user";

export interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt?: Date;
  createdBy?: IUser;
  modifiedAt?: Date;
  modifiedBy?: IUser;
  archivedAt?: Date;
  archivedBy?: IUser;
}

export interface IPostState {
  current: IPost;
  isForm: boolean;
  list: IPost[];
}
