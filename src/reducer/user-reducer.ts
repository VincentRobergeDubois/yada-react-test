import { CURRENT_USER_PARSE, LOGOUT, USER_LIST_PARSE } from "action/user-action";
import { IAction, TUserAction } from "model/action";
import { IUserState  } from "model/user";

const INITIAL_STATE: IUserState = {
  current: {
    abreviation: "",
    admin: false,
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

export default (state: IUserState = INITIAL_STATE, action: IAction<TUserAction>) => {
  switch (action.type) {
    case CURRENT_USER_PARSE:
      return { ...state, current: action.payload };
    case USER_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
