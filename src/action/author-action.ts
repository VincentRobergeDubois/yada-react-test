import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { IAction, IResponse, TDispatch } from "model/action";
import { IAuthor, IAuthorFormValues } from "model/author";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_AUTHOR_PARSE = "AUTHOR_PARSE";
export const AUTHOR_LIST_PARSE = "AUTHOR_LIST_PARSE";

const END_POINT_URL = "authors/";

export const parseCurrentAuthor = (item: IAuthor): IAction<IAuthor> => (
  { type: CURRENT_AUTHOR_PARSE, payload: item }
);

export const parseAuthorList = (list: IAuthor[]): IAction<IAuthor[]> => (
  { type: AUTHOR_LIST_PARSE, payload: list }
);

export const loadAuthor = (id: number) => {
  return (dispatch: TDispatch<IAuthor>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IAuthor>>) => {
        dispatch(parseCurrentAuthor(response.data.data));
      },
    );
  };
};

export const loadAuthorList = () => {
  return (dispatch: TDispatch<IAuthor[]>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IAuthor[]>>) => {
        dispatch(parseAuthorList(response.data.data));
      },
    );
  };
};

export const createAuthor = (formValues: IAuthorFormValues) => {
  return (dispatch: TDispatch<IAuthor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IAuthor[]>>) => {
        dispatch(parseAuthorList(response.data.data));
      },
    );
  };
};

export const updateAuthor = (formValues: IAuthorFormValues, id: number) => {
  return (dispatch: TDispatch<IAuthor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IAuthor[]>>) => {
        dispatch(parseAuthorList(response.data.data));
      },
    );
  };
};

export const deleteAuthor = (id: number) => {
  return (dispatch: TDispatch<IAuthor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IAuthor[]>>) => {
        dispatch(parseAuthorList(response.data.data));
      },
    );
  };
};
