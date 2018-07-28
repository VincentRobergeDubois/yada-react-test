import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { IAction, IResponse, TDispatch } from "model/action";
import { IEditor, IEditorFormValues } from "model/editor";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_EDITOR_PARSE = "EDITOR_PARSE";
export const EDITOR_LIST_PARSE = "EDITOR_LIST_PARSE";

const END_POINT_URL = "editors/";

export const parseCurrentEditor = (item: IEditor): IAction<IEditor> => (
  { type: CURRENT_EDITOR_PARSE, payload: item }
);

export const parseEditorList = (list: IEditor[]): IAction<IEditor[]> => (
  { type: EDITOR_LIST_PARSE, payload: list }
);

export const loadEditor = (id: number) => {
  return (dispatch: TDispatch<IEditor>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IEditor>>) => {
        dispatch(parseCurrentEditor(response.data.data));
      },
    );
  };
};

export const loadEditorList = () => {
  return (dispatch: TDispatch<IEditor[]>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IEditor[]>>) => {
        dispatch(parseEditorList(response.data.data));
      },
    );
  };
};

export const createEditor = (formValues: IEditorFormValues) => {
  return (dispatch: TDispatch<IEditor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IEditor[]>>) => {
        dispatch(parseEditorList(response.data.data));
      },
    );
  };
};

export const updateEditor = (formValues: IEditorFormValues, id: number) => {
  return (dispatch: TDispatch<IEditor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formValues, userId }).then(
      (response: AxiosResponse<IResponse<IEditor[]>>) => {
        dispatch(parseEditorList(response.data.data));
      },
    );
  };
};

export const deleteEditor = (id: number) => {
  return (dispatch: TDispatch<IEditor[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IEditor[]>>) => {
        dispatch(parseEditorList(response.data.data));
      },
    );
  };
};
