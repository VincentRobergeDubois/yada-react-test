import { IUserAction, LOAD_USER, LOAD_USER_LIST } from 'action';
import { IUser } from 'model/user';

const user: IUser = null;
const userList: IUser[] = [];

const INITIAL_USER_STATE = { user: user, userList: userList };

export default function(state = INITIAL_USER_STATE, action: IUserAction) {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, user: action.payload };
    case LOAD_USER_LIST:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}
