import { ServiceAction } from '../action';

type TService = ServiceAction.IService;

interface IServiceAction {
  type: string,
  payload: TService | TService[]
}

const service: TService = null;
const serviceList: TService[] = [];

const INITIAL_STATE = { service: service, serviceList: serviceList };

export default function(state = INITIAL_STATE, action: IServiceAction) {
  switch (action.type) {
    case ServiceAction.LOAD_SERVICE:
      return { ...state, service: action.payload };
    case ServiceAction.LOAD_SERVICE_LIST:
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
}
