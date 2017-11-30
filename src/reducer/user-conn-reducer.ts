import { IUserConnAction, LOAD_USER_CONN_LIST } from 'action';
import { IUserConn } from 'model/user-conn';

interface IUserConnReducerState {
  userConnList: IUserConn[];
}

const INITIAL_USER_CONN_STATE = {
  userConnList: []
};

export default (state: IUserConnReducerState = INITIAL_USER_CONN_STATE, action: IUserConnAction) => {
  switch (action.type) {
    case LOAD_USER_CONN_LIST:
      return { ...state, userConnList: action.payload };
    default:
      return state;
  }
}
