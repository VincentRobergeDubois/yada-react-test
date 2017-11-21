import { IOrganisationAction, LOAD_ORGANISATION, LOAD_ORGANISATION_LIST } from 'action';

const INITIAL_STATE = {
  organisation: null,
  organisationList: []
};

export default (state: any = INITIAL_STATE, action: IOrganisationAction) => {
  switch (action.type) {
    case LOAD_ORGANISATION:
      return { ...state, organisation: action.payload };
    case LOAD_ORGANISATION_LIST:
      return { ...state, organisationList: action.payload };
    default:
      return state;
  }
}
