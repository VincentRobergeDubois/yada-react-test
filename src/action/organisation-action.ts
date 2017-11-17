export const LOAD_ORGANISATION = 'LOAD_ORGANISATION';
export const LOAD_ORGANISATION_LIST = 'LOAD_ORGANISATION_LIST';

export interface IOrganisation {
  id: number,
  name: string,
  abreviation: string,
  headOffice: string,
  email: string,
  phone: number,
  extension: number
}

export const loadOrganisation = (organisation: IOrganisation) => {
  return { type: LOAD_ORGANISATION, payload: organisation };
}

export const loadOrganisationList = (organisationList: IOrganisation[]) => {
  return { type: LOAD_ORGANISATION_LIST, payload: organisationList };
}
