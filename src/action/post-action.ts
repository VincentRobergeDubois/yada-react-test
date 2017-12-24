import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IPost } from "model/post";
import { IError } from "model/response";
import { IState } from "model/state";

export const LOAD_POST = "LOAD_POST";
export const LOAD_POST_LIST = "LOAD_POST_LIST";

const END_POINT_URL = "http://localhost:3000/posts/";

export interface IPostAction {
  type: string;
  payload: IPost | IPost[];
}

interface IPostResponse {
  data: IPost | IPost[];
  error: IError;
  status: string;
}

const resolve = (type: string, data: IPost | IPost[]): IPostAction => {
  return { type, payload: data };
};

export const loadPost = (postId: number) => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}${postId}`).then((response: AxiosResponse<IPostResponse>) => {
      dispatch(resolve(LOAD_POST, response.data.data));
    });
  };
};

export const loadPostList = () => {
  return (dispatch: Dispatch<IState>) => {
    return axios.get(`${END_POINT_URL}`).then((response: AxiosResponse<IPostResponse>) => {
      dispatch(resolve(LOAD_POST_LIST, response.data.data));
    });
  };
};
