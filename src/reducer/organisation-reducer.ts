import { LOGOUT } from "action/menu-item-action";
import { IOrganisationAction, LOAD_ORGANISATION, LOAD_ORGANISATION_LIST } from "action/organisation-action";
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
    case LOAD_ORGANISATION:
      return { ...state, current: action.payload };
    case LOAD_ORGANISATION_LIST:
      return { ...state, list: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE};
    default:
      return state;
  }
};
