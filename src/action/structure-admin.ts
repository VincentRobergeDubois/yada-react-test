import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { parseOrganisationList } from "action/organisation-action";
import { parsePostList } from "action/post-action";
import { parseServiceList } from "action/service-action";
import { parseUserList } from "action/user-action";
import { IState } from "model/state";
import { IStructureAdmin } from "model/structure-admin";

export const STRUCTURE_ADMIN_PARSE = "STRUCTURE_ADMIN_PARSE";

const END_POINT_URL = "http://localhost:3000/structure-admin/";

export interface IStructureAdminAction {
  type: string;
  payload?: IStructureAdmin;
}

interface IStructureAdminResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const loadStructureAdmin = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(END_POINT_URL).then((response: AxiosResponse<IStructureAdminResponse<IStructureAdmin>>) => {
      const { organisationList, postList, serviceList, userList } = response.data.data;
      dispatch(parseOrganisationList(organisationList));
      dispatch(parsePostList(postList));
      dispatch(parseServiceList(serviceList));
      dispatch(parseUserList(userList));
    });
  };
};
