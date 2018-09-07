import { createSelector } from "reselect";

import { IBook, IBookState } from "model/book";
import { IState } from "model/state";

export const getBook = ({ book }: IState): IBookState => book;

export const getCurrentBook = createSelector(
  getBook, ({ current }: IBookState): IBook => current,
);

export const getBookList = createSelector(
  getBook, ({ list }: IBookState): IBook[] => list,
);
