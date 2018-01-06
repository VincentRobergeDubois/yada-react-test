import { IUserAction, LOGOUT, USER_LIST_PARSE, USER_PARSE } from "action/user-action";
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
    case USER_PARSE:
      return { ...state, current: action.payload };
    case USER_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
