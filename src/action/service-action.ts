import { IService } from 'model/service';

export const LOAD_SERVICE = 'LOAD_SERVICE';
export const LOAD_SERVICE_LIST = 'LOAD_SERVICE_LIST';

export interface IServiceAction {
  type: string,
  payload: IService | IService[]
}

export const loadService = (service: IService): IServiceAction => {
  return { type: LOAD_SERVICE, payload: service };
}

export const loadServices = (serviceList: IService[]): IServiceAction => {
  return { type: LOAD_SERVICE_LIST, payload: serviceList };
}
