import { createSelector } from "reselect";

import { IService, IServiceState } from "model/service";
import { IState } from "model/state";

export const getService = (state: IState): IServiceState => state.service;

export const getCurrentService = createSelector(
  getService,
  (service: IServiceState): IService => {
    return service.current;
  },
);

export const getServiceList = createSelector(
  getService,
  (service: IServiceState): IService[] => {
    return service.list;
  },
);
