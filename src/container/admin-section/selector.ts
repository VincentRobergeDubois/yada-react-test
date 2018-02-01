import { createSelector } from "reselect";

import { IIsFormStruct, ISelectedItemStruct, ISelectedListStruct } from "container/admin-section/model";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IUser, IUserConn } from "model/user";
import { getCurrentOrganisation, getIsOrganisationForm, getOrganisationList } from "selector/organisation";
import { getCurrentPost, getIsPostForm, getPostList } from "selector/post";
import { getCurrentService, getIsServiceForm, getServiceList } from "selector/service";
import { getCurrentUser, getIsUserForm, getUserList } from "selector/user";

export const getSelectedItemStruct = createSelector(
  getCurrentOrganisation,
  getCurrentPost,
  getCurrentService,
  getCurrentUser,
  (organisation: IOrganisation, post: IPost, service: IService, user: IUserConn): ISelectedItemStruct => {
    return {
      organisation,
      post,
      service,
      user,
    };
  },
);

export const getSelectedListStruct = createSelector(
  getOrganisationList,
  getPostList,
  getServiceList,
  getUserList,
  (organisation: IOrganisation[], post: IPost[], service: IService[], user: IUser[]): ISelectedListStruct => {
    return {
      organisation,
      post,
      service,
      user,
    };
  },
);

export const getIsFormStruct = createSelector(
  getIsOrganisationForm,
  getIsPostForm,
  getIsServiceForm,
  getIsUserForm,
  (organisation: boolean, post: boolean, service: boolean, user: boolean): IIsFormStruct => {
    return {
      organisation,
      post,
      service,
      user,
    };
  },
);
