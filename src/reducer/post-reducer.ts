import { IPostAction, LOAD_POST, LOAD_POST_LIST } from "action/post-action";
import { IPost } from "model/post";

interface IPostReducerState {
  post: IPost;
  postList: IPost[];
}

const INITIAL_STATE = {
  post: { id: 0, title: "", content: "", image: "" },
  postList: [],
};

export default (state: IPostReducerState = INITIAL_STATE, action: IPostAction) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, post: action.payload };
    case LOAD_POST_LIST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
};
