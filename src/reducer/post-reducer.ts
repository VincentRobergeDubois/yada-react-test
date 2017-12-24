import { IPostAction, LOAD_POST, LOAD_POST_LIST } from "action/post-action";
import { IPostState } from "model/post";

const INITIAL_STATE: IPostState = {
  current: { id: 0, title: "", content: "", image: "" },
  list: [],
};

export default (state: IPostState = INITIAL_STATE, action: IPostAction) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, current: action.payload };
    case LOAD_POST_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
