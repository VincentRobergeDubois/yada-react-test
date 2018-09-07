import { createSelector } from "reselect";

import { IOrganisation, IOrganisationState } from "model/organisation";
import { IState } from "model/state";

export const getOrganisation = ({ organisation }: IState): IOrganisationState => organisation;

export const getCurrentOrganisation = createSelector(
  getOrganisation, ({ current }: IOrganisationState): IOrganisation => current,
);

export const getOrganisationList = createSelector(
  getOrganisation, ({ list }: IOrganisationState): IOrganisation[] => list,
);
