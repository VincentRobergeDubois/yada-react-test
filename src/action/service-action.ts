import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { IAction, IResponse, TDispatch } from "model/action";
import { IService, IServiceFormValues } from "model/service";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_SERVICE_PARSE = "CURRENT_SERVICE_PARSE";
export const SERVICE_LIST_PARSE = "SERVICE_LIST_PARSE";

const END_POINT_URL = "services/";

export const parseCurrentService = (service: IService): IAction<IService> => (
  { type: CURRENT_SERVICE_PARSE, payload: service }
);

export const parseServiceList = (list: IService[]): IAction<IService[]> => (
  { type: SERVICE_LIST_PARSE, payload: list }
);

export const loadService = (serviceId: number) => {
  return (dispatch: TDispatch<IService>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${serviceId}`).then(
      (response: AxiosResponse<IResponse<IService>>) => {
        dispatch(parseCurrentService(response.data.data));
      },
    );
  };
};

export const loadServiceList = () => {
  return (dispatch: TDispatch<IService[]>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const createService = (formData: IServiceFormValues) => {
  return (dispatch: TDispatch<IService[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const updateService = (formData: IServiceFormValues, id: number) => {
  return (dispatch: TDispatch<IService[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const deleteService = (id: number) => {
  return (dispatch: TDispatch<IService[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};
