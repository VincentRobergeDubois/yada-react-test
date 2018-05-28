import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IAction, IResponse } from "model/action";
import { IService, IServiceFormValues } from "model/service";
import { IState } from "model/state";

export const CURRENT_SERVICE_PARSE = "CURRENT_SERVICE_PARSE";
export const IS_SERVICE_FORM_PARSE = "IS_SERVICE_FORM_PARSE";
export const SERVICE_LIST_PARSE = "SERVICE_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/services/";

export const parseCurrentService = (service: IService): IAction<IService> => (
  { type: CURRENT_SERVICE_PARSE, payload: service }
);

export const parseIsServiceForm = (isForm: boolean): IAction<boolean> => (
  { type: IS_SERVICE_FORM_PARSE, payload: isForm }
);

export const parseServiceList = (list: IService[]): IAction<IService[]> => (
  { type: SERVICE_LIST_PARSE, payload: list }
);

export const loadService = (serviceId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${serviceId}`).then(
      (response: AxiosResponse<IResponse<IService>>) => {
        dispatch(parseCurrentService(response.data.data));
      },
    );
  };
};

export const loadServiceList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const createService = (formData: IServiceFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const updateService = (formData: IServiceFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};

export const deleteService = (id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.delete(`${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IService[]>>) => {
        dispatch(parseServiceList(response.data.data));
      },
    );
  };
};
