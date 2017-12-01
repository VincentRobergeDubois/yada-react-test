import { IServiceAction, LOAD_SERVICE, LOAD_SERVICE_LIST } from "action/service-action";
import { IService } from "model/service";

interface IServiceReducerState {
  service: IService;
  serviceList: IService[];
}

const INITIAL_STATE = {
  service: { id: 0, name: "", description: "" },
  serviceList: [],
};

export default (state: IServiceReducerState = INITIAL_STATE, action: IServiceAction) => {
  switch (action.type) {
    case LOAD_SERVICE:
      return { ...state, service: action.payload };
    case LOAD_SERVICE_LIST:
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
};
