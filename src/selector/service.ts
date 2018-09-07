import { createSelector } from "reselect";

import { IService, IServiceState } from "model/service";
import { IState } from "model/state";

export const getService = ({ service }: IState): IServiceState => service;

export const getCurrentService = createSelector(
  getService, ({ current }: IServiceState): IService => current,
);

export const getServiceList = createSelector(
  getService, ({ list }: IServiceState): IService[] => list,
);
