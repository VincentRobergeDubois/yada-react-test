import { createSelector } from "reselect";

import { IOrganisation, IOrganisationState } from "model/organisation";
import { IState } from "model/state";

export const getOrganisation = (state: IState): IOrganisationState => state.organisation;

export const getCurrentOrganisation = createSelector(
  getOrganisation,
  (organisation: IOrganisationState): IOrganisation => {
    return organisation.current;
  },
);

export const getOrganisationList = createSelector(
  getOrganisation,
  (organisation: IOrganisationState): IOrganisation[] => {
    return organisation.list;
  },
);
