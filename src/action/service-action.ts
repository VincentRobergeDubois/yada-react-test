import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IError } from "model/response";
import { IService } from "model/service";
import { IState } from "model/state";

export const LOAD_SERVICE = "LOAD_SERVICE";
export const LOAD_SERVICE_LIST = "LOAD_SERVICE_LIST";

const END_POINT_URL = "http://localhost:3000/services/";

export interface IServiceAction {
  type: string;
  payload?: IService | IService[];
}

interface IServiceResponse {
  data: IService | IService[];
  error: IError;
  status: string;
}

const resolve = (type: string, data: IService | IService[]): IServiceAction => {
  return { type, payload: data };
};

export const loadService = (serviceId: number) => {
  return (dispatch: Dispatch<IState>) => {
    axios.get(`${END_POINT_URL}${serviceId}`).then((response: AxiosResponse<IServiceResponse>) => {
      dispatch(resolve(LOAD_SERVICE, response.data.data));
    });
  };
};

export const loadServiceList = () => {
  return (dispatch: Dispatch<IState>) => {
    axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IServiceResponse>) => {
      dispatch(resolve(LOAD_SERVICE_LIST, response.data.data));
    });
  };
};
