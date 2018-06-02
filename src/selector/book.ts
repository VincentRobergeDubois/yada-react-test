import { createSelector } from "reselect";

import {IBook, IBookState } from "model/book";
import { IState } from "model/state";

export const getBook = (state: IState): IBookState => state.book;

export const getCurrentBook = createSelector(
  getBook, ({ current }: IBookState): IBook => current,
);

export const getBookList = createSelector(
  getBook, ({ list }: IBookState): IBook[] => list,
);
