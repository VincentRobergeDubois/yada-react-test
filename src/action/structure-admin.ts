import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { parseBookList } from "action/book-action";
import { parseOrganisationList } from "action/organisation-action";
import { parsePostList } from "action/post-action";
import { parseServiceList } from "action/service-action";
import { parseUserList } from "action/user-action";
import { IResponse, TDispatch } from "model/action";
import { IStructureAdmin, TStructureAdminAction } from "model/structure-admin";

export const STRUCTURE_ADMIN_PARSE = "STRUCTURE_ADMIN_PARSE";

const END_POINT_URL = "structure-admin/";

export const loadStructureAdmin = () => {
  return (dispatch: TDispatch<TStructureAdminAction>): Promise<void> => {
    return axios.get(BASE_URL + END_POINT_URL).then((response: AxiosResponse<IResponse<IStructureAdmin>>) => {
      const { organisationList, postList, serviceList, userList, bookList } = response.data.data;
      dispatch(parseOrganisationList(organisationList));
      dispatch(parsePostList(postList));
      dispatch(parseServiceList(serviceList));
      dispatch(parseUserList(userList));
      dispatch(parseBookList(bookList));
    });
  };
};
