import { IUserAction, LOAD_USER, LOAD_USER_LIST } from 'action';

const INITIAL_USER_STATE = { user: null, userList: [] };

export default (state: any = INITIAL_USER_STATE, action: IUserAction) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, user: action.payload };
    case LOAD_USER_LIST:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}
