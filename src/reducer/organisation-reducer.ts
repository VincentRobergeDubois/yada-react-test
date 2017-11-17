import { OrganisationAction } from '../action';

type TOrganisation = OrganisationAction.IOrganisation;

interface IOrganisationAction {
  type: string,
  payload: TOrganisation | TOrganisation[]
}

const organisation: TOrganisation = null;
const organisations: TOrganisation[] = [];

const INITIAL_STATE = {
  organisation: organisation,
  organisations: organisation
};

export default function(state = INITIAL_STATE, action: IOrganisationAction) {
  switch (action.type) {
    case OrganisationAction.LOAD_ORGANISATION:
      return { ...state, organisation: action.payload };
    case OrganisationAction.LOAD_ORGANISATION_LIST:
      return { ...state, organisations: action.payload };
    default:
      return state;
  }
}
