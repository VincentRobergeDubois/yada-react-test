import axios, { AxiosError, AxiosResponse } from "axios";
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

interface IOrganisationResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const loadOrganisation = (organisationId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${organisationId}`).then(
      (response: AxiosResponse<IOrganisationResponse<IOrganisation>>) => {
        dispatch({ type: LOAD_ORGANISATION, payloda: response.data.data },
      );
    });
  };
};

export const loadOrganisationList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IOrganisationResponse<IOrganisation[]>>) => {
      dispatch({ type: LOAD_ORGANISATION_LIST, payload: response.data.data });
    });
  };
};
