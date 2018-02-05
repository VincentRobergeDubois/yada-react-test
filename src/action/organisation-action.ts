import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IOrganisationFormValues } from "container/organisation-manager/model";
import { IAction, IResponse } from "model/action";
import { IOrganisation } from "model/organisation";
import { IState } from "model/state";

export const CURRENT_ORGANISATION_PARSE = "CURRENT_ORGANISATION_PARSE";
export const IS_ORGANISATION_FORM_PARSE = "IS_ORGANISATION_FORM_PARSE";
export const ORGANISATION_LIST_PARSE = "ORGANISATION_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/organisations/";

export const parseCurrentOrganisation = (organisation: IOrganisation): IAction<IOrganisation> => {
  return { type: CURRENT_ORGANISATION_PARSE, payload: organisation };
};

export const parseIsOrganisationForm = (isForm: boolean): IAction<boolean> => {
  return { type: IS_ORGANISATION_FORM_PARSE, payload: isForm};
};

export const parseOrganisationList = (list: IOrganisation[]): IAction<IOrganisation[]> => {
  return { type: ORGANISATION_LIST_PARSE, payload: list };
};

export const loadOrganisation = (organisationId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${organisationId}`).then(
      (response: AxiosResponse<IResponse<IOrganisation>>) => {
        dispatch(parseCurrentOrganisation(response.data.data));
      },
    );
  };
};

export const loadOrganisationList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const createOrganisation = (formData: IOrganisationFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};

export const updateOrganisation = (formData: IOrganisationFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IOrganisation[]>>) => {
        dispatch(parseOrganisationList(response.data.data));
      },
    );
  };
};
