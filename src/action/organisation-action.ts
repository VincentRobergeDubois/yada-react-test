import { IOrganisation } from 'model/organisation';

export const LOAD_ORGANISATION = 'LOAD_ORGANISATION';
export const LOAD_ORGANISATION_LIST = 'LOAD_ORGANISATION_LIST';

export interface IOrganisationAction {
  type: string;
  payload: IOrganisation | IOrganisation[];
}

export const loadOrganisation = (organisation: IOrganisation): IOrganisationAction => {
  return { type: LOAD_ORGANISATION, payload: organisation };
}

export const loadOrganisationList = (organisationList: IOrganisation[]): IOrganisationAction => {
  return { type: LOAD_ORGANISATION_LIST, payload: organisationList };
}
