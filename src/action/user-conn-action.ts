import { IUserConn } from "model/user-conn";
import { INITIAL_USER_CONN_STATE } from "reducer/user-conn-reducer";

export const LOAD_USER_CONN = "LOAD_USER_CONN";
export const RESET_USER_CONN = "RESET_USER_CONN";

export interface IUserConnAction {
  type: string;
  payload: IUserConn | IUserConn[];
}

export const loadUserConn = (userConn: IUserConn): IUserConnAction => {
  return { type: LOAD_USER_CONN, payload: userConn };
};

export const resetUserConn = (): IUserConnAction => {
  return { type: RESET_USER_CONN, payload: INITIAL_USER_CONN_STATE.userConn };
}

