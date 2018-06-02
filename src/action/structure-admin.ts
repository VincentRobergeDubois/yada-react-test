import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { BASE_URL } from "action";
import { parseOrganisationList } from "action/organisation-action";
import { parsePostList } from "action/post-action";
import { parseServiceList } from "action/service-action";
import { parseUserList } from "action/user-action";
import { IResponse } from "model/action";
import { IState } from "model/state";
import { IStructureAdmin } from "model/structure-admin";

export const STRUCTURE_ADMIN_PARSE = "STRUCTURE_ADMIN_PARSE";

const END_POINT_URL = "structure-admin/";

export const loadStructureAdmin = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(BASE_URL + END_POINT_URL).then((response: AxiosResponse<IResponse<IStructureAdmin>>) => {
      const { organisationList, postList, serviceList, userList } = response.data.data;
      dispatch(parseOrganisationList(organisationList));
      dispatch(parsePostList(postList));
      dispatch(parseServiceList(serviceList));
      dispatch(parseUserList(userList));
    });
  };
};
