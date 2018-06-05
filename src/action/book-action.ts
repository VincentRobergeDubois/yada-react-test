import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { BASE_URL } from "action";
import { IAction, IResponse } from "model/action";
import { IBook, IBookFormValues } from "model/book";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_BOOK_PARSE = "BOOK_PARSE";
export const BOOK_LIST_PARSE = "BOOK_LIST_PARSE";

const END_POINT_URL = "books/";

export const parseCurrentBook = (item: IBook): IAction<IBook> => (
  { type: CURRENT_BOOK_PARSE, payload: item }
);

export const parseBookList = (list: IBook[]): IAction<IBook[]> => (
  { type: BOOK_LIST_PARSE, payload: list }
);

export const loadBook = (id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IBook>>) => {
        dispatch(parseCurrentBook(response.data.data));
      },
    );
  };
};

export const loadBookList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IBook[]>>) => {
        dispatch(parseBookList(response.data.data));
      },
    );
  };
};

export const createBook = (formData: IBookFormValues) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IBook[]>>) => {
        dispatch(loadBookList());
      },
    );
  };
};

export const updateBook = (formData: IBookFormValues, id: number) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IBook[]>>) => {
        dispatch(loadBookList());
      },
    );
  };
};

export const deleteBook = (id: number) => {
  return (dispatch: Dispatch<IState>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IBook[]>>) => {
        dispatch(loadBookList());
      },
    );
  };
};
