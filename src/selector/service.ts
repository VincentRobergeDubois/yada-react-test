import { createSelector } from "reselect";

import { IService, IServiceState } from "model/service";
import { IState } from "model/state";

export const getService = (state: IState): IServiceState => state.service;

export const getCurrentService = createSelector(
  getService, ({ current }: IServiceState): IService => current,
);

export const getServiceList = createSelector(
  getService, ({ list }: IServiceState): IService[] => list,
);

export const getIsServiceForm = createSelector(
  getService, ({ isForm }: IServiceState): boolean => isForm,
);
