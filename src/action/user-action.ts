import { IUser } from 'model/user';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_LIST = 'LOAD_USER_LIST';

export interface IUserAction {
  type: string,
  payload: IUser | IUser[]
}

export const loadUser = (user: IUser): IUserAction => {
  return { type: LOAD_USER, payload: user };
}

export const loadUserList = (userList: IUser[]): IUserAction => {
  return { type: LOAD_USER_LIST, payload: userList };
}
