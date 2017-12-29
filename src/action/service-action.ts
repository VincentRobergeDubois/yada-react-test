import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IService } from "model/service";
import { IState } from "model/state";

export const LOAD_SERVICE = "LOAD_SERVICE";
export const LOAD_SERVICE_LIST = "LOAD_SERVICE_LIST";

const END_POINT_URL = "http://localhost:3000/services/";

export interface IServiceAction {
  type: string;
  payload?: IService | IService[];
}

interface IServiceResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const loadService = (serviceId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${serviceId}`).then((response: AxiosResponse<IServiceResponse<IService>>) => {
      dispatch({ type: LOAD_SERVICE, payload: response.data.data });
    });
  };
};

export const loadServiceList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IServiceResponse<IService[]>>) => {
      dispatch({ type: LOAD_SERVICE_LIST, payload: response.data.data });
    });
  };
};
