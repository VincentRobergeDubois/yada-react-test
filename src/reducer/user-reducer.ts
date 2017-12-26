import { IUserAction, LOAD_USER, LOAD_USER_LIST } from "action/user-action";
import { LOGOUT } from "action/user-action";
import { IUserState } from "model/user";

const INITIAL_STATE: IUserState = {
  current: {
    abreviation: "",
    admin: 0,
    email: "",
    firstname: "",
    id: 0,
    lastname: "",
    organisationList: [],
    title: "",
    username: "",
  },
  list: [],
};

export default (state: IUserState = INITIAL_STATE, action: IUserAction) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, current: action.payload };
    case LOAD_USER_LIST:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
