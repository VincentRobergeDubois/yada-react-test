import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IOrganisation } from "model/organisation";
import { IState } from "model/state";

export const CURRENT_ORGANISATION_PARSE = "CURRENT_ORGANISATION_PARSE";
export const IS_ORGANISATION_FORM_PARSE = "IS_ORGANISATION_FORM_PARSE";
export const ORGANISATION_LIST_PARSE = "ORGANISATION_LIST_PARSE";

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

export const parseCurrentOrganisation = (organisation: IOrganisation) => {
  return { type: CURRENT_ORGANISATION_PARSE, payload: organisation };
};

export const parseIsOrganisationForm = (isForm: boolean) => {
  return { type: IS_ORGANISATION_FORM_PARSE, payload: isForm};
};

export const parseOrganisationList = (list: IOrganisation[]) => {
  return { type: ORGANISATION_LIST_PARSE, payload: list };
};

export const loadOrganisation = (organisationId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${organisationId}`).then(
      (response: AxiosResponse<IOrganisationResponse<IOrganisation>>) => {
        dispatch(parseCurrentOrganisation(response.data.data));
      },
    );
  };
};

export const loadOrganisationList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then(
      (response: AxiosResponse<IOrganisationResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};
