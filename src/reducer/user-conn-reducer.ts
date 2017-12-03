import { IUserConnAction, LOAD_USER_CONN, RESET_USER_CONN } from "action/user-conn-action";
import { IUserConn } from "model/user-conn";

interface IUserConnReducerState {
  userConn: IUserConn;
}

export const INITIAL_USER_CONN_STATE: IUserConnReducerState = {
  userConn: {
    abreviation: "",
    email: "",
    firstname: "",
    id: 0,
    lastname: "",
    organisationList: [],
    title: "",
    username: "",
  },
};

export default (state: IUserConnReducerState = INITIAL_USER_CONN_STATE, action: IUserConnAction) => {
  switch (action.type) {
    case LOAD_USER_CONN:
      return { ...state, userConn: action.payload };
    case RESET_USER_CONN:
      return { ...state, userConn: action.payload };
    default:
      return state;
  }
};
