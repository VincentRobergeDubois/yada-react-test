import { UserAction } from '../action';

type TUser = UserAction.IUser;

interface IUserAction {
  type: string,
  payload: TUser | TUser[]
}

const user: TUser = null;
const userList: TUser[] = [];

const INITIAL_USER_STATE = { user: user, userList: userList };

export default function(state = INITIAL_USER_STATE, action: IUserAction) {
  switch (action.type) {
    case UserAction.LOAD_USER:
      return { ...state, user: action.payload };
    case UserAction.LOAD_USER_LIST:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}
