import { IServiceAction, SERVICE_LIST_PARSE, SERVICE_PARSE } from "action/service-action";
import { LOGOUT } from "action/user-action";
import { IServiceState } from "model/service";

const INITIAL_STATE: IServiceState = {
  current: { id: 0, name: "", description: "" },
  list: [],
};

export default (state: IServiceState = INITIAL_STATE, action: IServiceAction) => {
  switch (action.type) {
    case SERVICE_PARSE:
      return { ...state, current: action.payload };
    case SERVICE_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
