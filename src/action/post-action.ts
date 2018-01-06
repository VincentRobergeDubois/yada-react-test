import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IPost } from "model/post";
import { IState } from "model/state";

export const POST_PARSE = "POST_PARSE";
export const POST_LIST_PARSE = "POST_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/posts/";

export interface IPostAction {
  type: string;
  payload: IPost | IPost[];
}

interface IPostResponse<I> {
  data: I;
  error: AxiosError;
  status: number;
}

export const parsePost = (post: IPost) => {
  return { type: POST_PARSE, payload: post };
};

export const parsePostList = (list: IPost[]) => {
  return { type: POST_LIST_PARSE, payload: list };
};

export const loadPost = (postId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${postId}`).then(
      (response: AxiosResponse<IPostResponse<IPost>>) => {
        dispatch(parsePost(response.data.data));
      },
    );
  };
};

export const loadPostList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then(
      (response: AxiosResponse<IPostResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};
