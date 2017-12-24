import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IOrganisation } from "model/organisation";
import { IState } from "model/state";

export const LOAD_ORGANISATION = "LOAD_ORGANISATION";
export const LOAD_ORGANISATION_LIST = "LOAD_ORGANISATION_LIST";

const END_POINT_URL = "http://localhost:3000/organisations/";

export interface IOrganisationAction {
  type: string;
  payload?: IOrganisation | IOrganisation[];
}

interface IOrganisationResponse {
  data: IOrganisation | IOrganisation[];
  error: any;
  status: string;
}

const resolve = (type: string, data: IOrganisation | IOrganisation[]): IOrganisationAction => {
  return { type, payload: data };
};

export const loadOrganisation = (organisationId: number) => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}${organisationId}`).then((response: AxiosResponse<IOrganisationResponse>) => {
      dispatch(resolve(LOAD_ORGANISATION, response.data.data));
    });
  };
};

export const loadOrganisationList = () => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IOrganisationResponse>) => {
      dispatch(resolve(LOAD_ORGANISATION_LIST, response.data.data));
    });
  };
};
