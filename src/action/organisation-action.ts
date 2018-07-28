import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { IAction, IResponse, TDispatch } from "model/action";
import { IOrganisation, IOrganisationFormValues } from "model/organisation";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_ORGANISATION_PARSE = "CURRENT_ORGANISATION_PARSE";
export const ORGANISATION_LIST_PARSE = "ORGANISATION_LIST_PARSE";

const END_POINT_URL = "organisations/";

export const parseCurrentOrganisation = (organisation: IOrganisation): IAction<IOrganisation> => (
  { type: CURRENT_ORGANISATION_PARSE, payload: organisation }
);

export const parseOrganisationList = (list: IOrganisation[]): IAction<IOrganisation[]> => (
  { type: ORGANISATION_LIST_PARSE, payload: list }
);

export const loadOrganisation = (organisationId: number) => {
  return (dispatch: TDispatch<IOrganisation>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${organisationId}`).then(
      (response: AxiosResponse<IResponse<IOrganisation>>) => {
        dispatch(parseCurrentOrganisation(response.data.data));
      },
    );
  };
};

export const loadOrganisationList = () => {
  return (dispatch: TDispatch<IOrganisation[]>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const createOrganisation = (formData: IOrganisationFormValues) => {
  return (dispatch: TDispatch<IOrganisation[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const updateOrganisation = (formData: IOrganisationFormValues, id: number) => {
  return (dispatch: TDispatch<IOrganisation[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const deleteOrganisation = (id: number) => {
  return (dispatch: TDispatch<IOrganisation[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};
