export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_LIST = 'LOAD_USER_LIST';

export interface IUser {
  id: number,
  username: string,
  lastname: string,
  firstname: string,
  email: string,
  phone: number
}

export const loadUser = (user: IUser) => {
  return { type: LOAD_USER, payload: user };
}

export const loadUserList = (userList: IUser[]) => {
  return { type: LOAD_USER_LIST, payload: userList };
}
