import { IServiceAction, LOAD_SERVICE, LOAD_SERVICE_LIST } from "action/service-action";
import { LOGOUT } from "action/user-action";
import { IServiceState } from "model/service";

const INITIAL_STATE: IServiceState = {
  current: { id: 0, name: "", description: "" },
  list: [],
};

export default (state: IServiceState = INITIAL_STATE, action: IServiceAction) => {
  switch (action.type) {
    case LOAD_SERVICE:
      return { ...state, current: action.payload };
    case LOAD_SERVICE_LIST:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
