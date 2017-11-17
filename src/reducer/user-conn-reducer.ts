import { UserConnAction } from '../action';

type TUserConn = UserConnAction.IUserConn;

interface IUserConnAction {
  type: string,
  payload: TUserConn | TUserConn[]
}

const userConn: TUserConn = null;
const userConnList: TUserConn[] = [];

const INITIAL_USER_CONN_STATE = { user: userConn, userList: userConnList };

export default function(state = INITIAL_USER_CONN_STATE, action: IUserConnAction) {
  switch (action.type) {
    case UserConnAction.LOAD_USER_CONN:
      return { ...state, userConn: action.payload };
    case UserConnAction.LOAD_USER_CONN_LIST:
      return { ...state, userConnList: action.payload };
    default:
      return state;
  }
}
