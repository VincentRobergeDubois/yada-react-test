import { IUserAction, LOAD_USER, LOAD_USER_LIST } from 'action';
import { IUser } from 'model/user';

interface IUserReducerState {
  user: IUser;
  userList: IUser[];
}

const INITIAL_USER_STATE = {
  user: {
    id: 0,
    username: '',
    lastname: '',
    firstname: '',
    email: '',
    phone: ''
  },
  userList: []
};

export default (state: IUserReducerState = INITIAL_USER_STATE, action: IUserAction) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, user: action.payload };
    case LOAD_USER_LIST:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}
