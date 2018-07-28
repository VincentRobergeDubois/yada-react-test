import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "action";
import { IAction, IResponse, TDispatch } from "model/action";
import { IPost, IPostFormValues } from "model/post";
import { IState } from "model/state";
import { getCurrentUserId } from "selector/user";

export const CURRENT_POST_PARSE = "CURRENT_POST_PARSE";
export const POST_LIST_PARSE = "POST_LIST_PARSE";

const END_POINT_URL = "posts/";

export const parseCurrentPost = (post: IPost): IAction<IPost> => (
  { type: CURRENT_POST_PARSE, payload: post }
);

export const parsePostList = (list: IPost[]): IAction<IPost[]> => (
  { type: POST_LIST_PARSE, payload: list }
);

export const loadPost = (postId: number) => {
  return (dispatch: TDispatch<IPost>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}${postId}`).then(
      (response: AxiosResponse<IResponse<IPost>>) => {
        dispatch(parseCurrentPost(response.data.data));
      },
    );
  };
};

export const loadPostList = () => {
  return (dispatch: TDispatch<IPost[]>): Promise<void> => {
    return axios.get(`${BASE_URL}${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const createPost = (formData: IPostFormValues) => {
  return (dispatch: TDispatch<IPost[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.post(`${BASE_URL}${END_POINT_URL}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const updatePost = (formData: IPostFormValues, id: number) => {
  return (dispatch: TDispatch<IPost[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.patch(`${BASE_URL}${END_POINT_URL}${id}`, { ...formData, userId }).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const deletePost = (id: number) => {
  return (dispatch: TDispatch<IPost[]>, getState: () => IState): Promise<void> => {
    const userId = getCurrentUserId(getState());
    return axios.put(`${BASE_URL}${END_POINT_URL}${id}`, { userId }).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};
