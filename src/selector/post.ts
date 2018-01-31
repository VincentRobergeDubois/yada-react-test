import { createSelector } from "reselect";

import { IPost, IPostState } from "model/post";
import { IState } from "model/state";

export const getPost = (state: IState): IPostState => state.post;

export const getCurrentPost = createSelector(
  getPost,
  (post: IPostState): IPost => {
    return post.current;
  },
);

export const getPostList = createSelector(
  getPost,
  (post: IPostState): IPost[] => {
    return post.list;
  },
);
