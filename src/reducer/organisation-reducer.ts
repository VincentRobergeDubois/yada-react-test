import { IOrganisationAction, LOAD_ORGANISATION, LOAD_ORGANISATION_LIST } from 'action';
import { IOrganisation } from 'model/organisation';

const organisation: IOrganisation = null;
const organisations: IOrganisation[] = [];

const INITIAL_STATE = {
  organisation: organisation,
  organisations: organisation
};

export default function(state = INITIAL_STATE, action: IOrganisationAction) {
  switch (action.type) {
    case LOAD_ORGANISATION:
      return { ...state, organisation: action.payload };
    case LOAD_ORGANISATION_LIST:
      return { ...state, organisations: action.payload };
    default:
      return state;
  }
}
