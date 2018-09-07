import { CURRENT_SERVICE_PARSE, SERVICE_LIST_PARSE } from "action/service-action";
import { LOGOUT } from "action/user-action";
import { IAction, TServiceAction } from "model/action";
import { IServiceState } from "model/service";

const INITIAL_STATE: IServiceState = {
  current: { id: 0, name: "", description: "" },
  list: [],
};

export default (state: IServiceState = INITIAL_STATE, action: IAction<TServiceAction>) => {
  switch (action.type) {
    case CURRENT_SERVICE_PARSE:
      return { ...state, current: action.payload };
    case SERVICE_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
