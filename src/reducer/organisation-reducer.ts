import { IOrganisationAction, ORGANISATION_LIST_PARSE, ORGANISATION_PARSE } from "action/organisation-action";
import { LOGOUT } from "action/user-action";
import { IOrganisationState } from "model/organisation";

const INITIAL_STATE: IOrganisationState = {
  current: {
    abreviation: "",
    email: "",
    extension: 0,
    headOffice: "",
    id: 0,
    name: "",
    phone: 0,
  },
  list: [],
};

export default (state: IOrganisationState = INITIAL_STATE, action: IOrganisationAction) => {
  switch (action.type) {
    case ORGANISATION_PARSE:
      return { ...state, current: action.payload };
    case ORGANISATION_LIST_PARSE:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE};
    default:
      return state;
  }
};
