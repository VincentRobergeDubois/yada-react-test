import { IPost } from "model/post";

export const LOAD_POST = "LOAD_POST";
export const LOAD_POST_LIST = "LOAD_POST_LIST";

export interface IPostAction {
  type: string;
  payload: IPost | IPost[];
}

interface IPostResponse {
  status: number;
  error: any;
  data: IPost | IPost[];
}

export const loadPost = (post: IPostResponse): IPostAction => {
  return { type: LOAD_POST, payload: post.data };
};

export const loadPostList = (postList: IPostResponse): IPostAction => {
  return { type: LOAD_POST_LIST, payload: postList.data };
};
