export const LOAD_SERVICE = 'LOAD_SERVICE';
export const LOAD_SERVICE_LIST = 'LOAD_SERVICE_LIST';

export interface IService {
  id: number,
  name: string,
  description: string
}

export const loadService = (service: IService) => {
  return { type: LOAD_SERVICE, payload: service };
}

export const loadServices = (serviceList: IService[]) => {
  return { type: LOAD_SERVICE_LIST, payload: serviceList };
}
