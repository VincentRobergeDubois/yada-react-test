import { IUserConnAction, LOAD_USER_CONN, LOAD_USER_CONN_LIST } from 'action';

const INITIAL_USER_CONN_STATE = { user: null, userList: [] };

export default (state: any = INITIAL_USER_CONN_STATE, action: IUserConnAction) => {
  switch (action.type) {
    case LOAD_USER_CONN:
      return { ...state, userConn: action.payload };
    case LOAD_USER_CONN_LIST:
      return { ...state, userConnList: action.payload };
    default:
      return state;
  }
}
