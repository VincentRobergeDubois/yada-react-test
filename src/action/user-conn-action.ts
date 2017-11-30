import { IUserConn } from 'model/user-conn';

export const LOAD_USER_CONN_LIST = 'LOAD_USER_LIST_CONN';

export interface IUserConnAction {
  type: string;
  payload: IUserConn[];
}

export const loadUserConnList = (userConnList: IUserConn[]): IUserConnAction => {
  return { type: LOAD_USER_CONN_LIST, payload: userConnList };
}
