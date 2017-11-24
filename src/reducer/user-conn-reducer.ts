import { IUserConnAction, LOAD_USER_CONN, LOAD_USER_CONN_LIST } from 'action';
import { IUserConn } from 'model/user-conn';

interface IUserConnReducerState {
  userConn: IUserConn;
  userConnList: IUserConn[];
}

const INITIAL_USER_CONN_STATE = {
  userConn: {
    id: 0,
    title: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    organisationList: [],
    abreviation: '',
  },
  userConnList: []
};

export default (state: IUserConnReducerState = INITIAL_USER_CONN_STATE, action: IUserConnAction) => {
  switch (action.type) {
    case LOAD_USER_CONN:
      return { ...state, userConn: action.payload };
    case LOAD_USER_CONN_LIST:
      return { ...state, userConnList: action.payload };
    default:
      return state;
  }
}
