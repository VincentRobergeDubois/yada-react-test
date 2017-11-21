import { IServiceAction, LOAD_SERVICE, LOAD_SERVICE_LIST } from 'action';

const INITIAL_STATE = {
  service: null,
  serviceList: []
};

export default (state: any = INITIAL_STATE, action: IServiceAction) => {
  switch (action.type) {
    case LOAD_SERVICE:
      return { ...state, service: action.payload };
    case LOAD_SERVICE_LIST:
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
}
