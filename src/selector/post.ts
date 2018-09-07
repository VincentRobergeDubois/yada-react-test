import { createSelector } from "reselect";

import { IPost, IPostState } from "model/post";
import { IState } from "model/state";

export const getPost = ({ post }: IState): IPostState => post;

export const getCurrentPost = createSelector(
  getPost, ({ current }: IPostState): IPost => current,
);

export const getPostList = createSelector(
  getPost, ({ list }: IPostState): IPost[] => list,
);
