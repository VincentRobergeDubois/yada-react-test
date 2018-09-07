import { createSelector } from "reselect";

import { IAuthor, IAuthorState } from "model/author";
import { IState } from "model/state";

export const getAuthor = ({ author }: IState): IAuthorState => author;

export const getCurrentAuthor = createSelector(
  getAuthor, ({ current }: IAuthorState): IAuthor => current,
);

export const getAuthorList = createSelector(
  getAuthor, ({ list }: IAuthorState): IAuthor[] => list,
);
