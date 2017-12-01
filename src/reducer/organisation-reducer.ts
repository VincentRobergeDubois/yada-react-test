import { IOrganisationAction, LOAD_ORGANISATION, LOAD_ORGANISATION_LIST } from "action/organisation-action";
import { IOrganisation } from "model/organisation";

interface IOrganisationReducerState {
  organisation: IOrganisation;
  organisationList: IOrganisation[];
}

const INITIAL_STATE = {
  organisation: {
    abreviation: "",
    email: "",
    extension: 0,
    headOffice: "",
    id: 0,
    name: "",
    phone: 0,
  },
  organisationList: [],
};

export default (state: IOrganisationReducerState = INITIAL_STATE, action: IOrganisationAction) => {
  switch (action.type) {
    case LOAD_ORGANISATION:
      return { ...state, organisation: action.payload };
    case LOAD_ORGANISATION_LIST:
      return { ...state, organisationList: action.payload };
    default:
      return state;
  }
};
