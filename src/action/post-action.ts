import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IPost } from "model/post";
import { IState } from "model/state";

export const CURRENT_POST_PARSE = "CURRENT_POST_PARSE";
export const IS_POST_FORM_PARSE = "IS_POST_FORM_PARSE";
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

export const parseCurrentPost = (post: IPost) => {
  return { type: CURRENT_POST_PARSE, payload: post };
};

export const parseIsPostForm = (isForm: boolean) => {
  return { type: IS_POST_FORM_PARSE, payload: isForm };
};

export const parsePostList = (list: IPost[]) => {
  return { type: POST_LIST_PARSE, payload: list };
};

export const loadPost = (postId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${postId}`).then(
      (response: AxiosResponse<IPostResponse<IPost>>) => {
        dispatch(parseCurrentPost(response.data.data));
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
