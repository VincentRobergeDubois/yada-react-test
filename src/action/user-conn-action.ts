import { IOrganisation } from './organisation-action';

export const LOAD_USER_CONN = 'LOAD_USER_CONN';
export const LOAD_USER_CONN_LIST = 'LOAD_USER_LIST_CONN';

export interface IUserConn {
  id: number,
  title: string,
  username: string,
  lastname: string,
  firstname: string,
  email: string,
  organisationList: IOrganisation[]
}

export const loadUserConn = (userConn: IUserConn) => {
  return { type: LOAD_USER_CONN, payload: userConn };
}

export const loadUserConnList = (userConnList: IUserConn[]) => {
  return { type: LOAD_USER_CONN_LIST, payload: userConnList };
}
