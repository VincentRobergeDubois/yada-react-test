import { PostAction } from '../action';

type TPost = PostAction.IPost;

interface IPostAction {
  type: string,
  payload: TPost | TPost[]
}

const post: TPost = null;
const postList: TPost[] = [];

const INITIAL_STATE = { post: post, postList: postList };

export default function(state = INITIAL_STATE, action: IPostAction) {
  switch (action.type) {
    case PostAction.LOAD_POST:
      return { ...state, post: action.payload };
    case PostAction.LOAD_POST_LIST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
}
