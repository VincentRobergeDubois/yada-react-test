import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IPost } from "model/post";
import { IState } from "model/state";

export const LOAD_POST = "LOAD_POST";
export const LOAD_POST_LIST = "LOAD_POST_LIST";

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

export const loadPost = (postId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${postId}`).then((response: AxiosResponse<IPostResponse<IPost>>) => {
      dispatch({ type: LOAD_POST, payload: response.data.data });
    });
  };
};

export const loadPostList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IPostResponse<IPost[]>>) => {
      dispatch({ type: LOAD_POST_LIST, payload: response.data.data });
    });
  };
};
