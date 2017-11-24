import { IUserConn } from 'model/user-conn';

export const LOAD_USER_CONN = 'LOAD_USER_CONN';
export const LOAD_USER_CONN_LIST = 'LOAD_USER_LIST_CONN';

export interface IUserConnAction {
  type: string;
  payload: IUserConn | IUserConn[];
}

export const loadUserConn = (userConn: IUserConn): IUserConnAction => {
  return { type: LOAD_USER_CONN, payload: userConn };
}

export const loadUserConnList = (userConnList: IUserConn[]): IUserConnAction => {
  return { type: LOAD_USER_CONN_LIST, payload: userConnList };
}
