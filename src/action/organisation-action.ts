import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { BASE_URL } from "action";
import { IAction, IResponse } from "model/action";
import { IOrganisation, IOrganisationFormValues } from "model/organisation";
import { IState } from "model/state";

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
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${organisationId}`).then(
      (response: AxiosResponse<IResponse<IOrganisation>>) => {
        dispatch(parseCurrentOrganisation(response.data.data));
      },
    );
  };
};

export const loadOrganisationList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const createOrganisation = (formData: IOrganisationFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${BASE_URL}${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const updateOrganisation = (formData: IOrganisationFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const deleteOrganisation = (id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.delete(`${BASE_URL}${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};
