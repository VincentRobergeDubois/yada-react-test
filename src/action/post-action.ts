import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { IAction, IResponse } from "model/action";
import { IPost, IPostFormValues } from "model/post";
import { IState } from "model/state";

export const CURRENT_POST_PARSE = "CURRENT_POST_PARSE";
export const IS_POST_FORM_PARSE = "IS_POST_FORM_PARSE";
export const POST_LIST_PARSE = "POST_LIST_PARSE";

const END_POINT_URL = "http://localhost:3000/posts/";

export const parseCurrentPost = (post: IPost): IAction<IPost> => (
  { type: CURRENT_POST_PARSE, payload: post }
);

export const parseIsPostForm = (isForm: boolean): IAction<boolean> => (
  { type: IS_POST_FORM_PARSE, payload: isForm }
);

export const parsePostList = (list: IPost[]): IAction<IPost[]> => (
  { type: POST_LIST_PARSE, payload: list }
);

export const loadPost = (postId: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}${postId}`).then(
      (response: AxiosResponse<IResponse<IPost>>) => {
        dispatch(parseCurrentPost(response.data.data));
      },
    );
  };
};

export const loadPostList = () => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.get(`${END_POINT_URL}`).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const createPost = (formData: IPostFormValues) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.post(`${END_POINT_URL}`, formData).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const updatePost = (formData: IPostFormValues, id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.patch(`${END_POINT_URL}${id}`, formData).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};

export const deletePost = (id: number) => {
  return (dispatch: Dispatch<IState>): Promise<void> => {
    return axios.delete(`${END_POINT_URL}${id}`).then(
      (response: AxiosResponse<IResponse<IPost[]>>) => {
        dispatch(parsePostList(response.data.data));
      },
    );
  };
};
