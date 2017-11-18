import { IServiceAction, LOAD_SERVICE, LOAD_SERVICE_LIST } from 'action';
import { IService } from 'model/service';

const service: IService = null;
const serviceList: IService[] = [];

const INITIAL_STATE = { service: service, serviceList: serviceList };

export default function(state = INITIAL_STATE, action: IServiceAction) {
  switch (action.type) {
    case LOAD_SERVICE:
      return { ...state, service: action.payload };
    case LOAD_SERVICE_LIST:
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
}
