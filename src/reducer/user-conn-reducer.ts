import { IUserConnAction, LOAD_USER_CONN, LOAD_USER_CONN_LIST } from 'action';
import { IUserConn } from 'model/user-conn';

const userConn: IUserConn = null;
const userConnList: IUserConn[] = [];

const INITIAL_USER_CONN_STATE = { user: userConn, userList: userConnList };

export default function(state = INITIAL_USER_CONN_STATE, action: IUserConnAction) {
  switch (action.type) {
    case LOAD_USER_CONN:
      return { ...state, userConn: action.payload };
    case LOAD_USER_CONN_LIST:
      return { ...state, userConnList: action.payload };
    default:
      return state;
  }
}
