import { IPost } from 'model/post';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_LIST = 'LOAD_POST_LIST';

export interface IPostAction {
  type: string,
  payload: IPost | IPost[]
}

export const loadPost = (post: IPost) => {
  return { type: LOAD_POST, payload: post };
}

export const loadPostList = (postList: IPost[]) => {
  return { type: LOAD_POST_LIST, payload: postList };
}
