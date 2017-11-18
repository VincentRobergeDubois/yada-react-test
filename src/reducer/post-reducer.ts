import { IPostAction, LOAD_POST, LOAD_POST_LIST } from 'action';
import { IPost } from 'model/post';

const post: IPost = null;
const postList: IPost[] = [];

const INITIAL_STATE = { post: post, postList: postList };

export default function(state = INITIAL_STATE, action: IPostAction) {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, post: action.payload };
    case LOAD_POST_LIST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
}
