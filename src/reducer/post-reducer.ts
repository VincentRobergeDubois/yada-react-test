import { IPostAction, POST_LIST_PARSE, POST_PARSE } from "action/post-action";
import { IPostState } from "model/post";

const INITIAL_STATE: IPostState = {
  current: { id: 0, title: "", content: "", image: "" },
  list: [],
};

export default (state: IPostState = INITIAL_STATE, action: IPostAction) => {
  switch (action.type) {
    case POST_PARSE:
      return { ...state, current: action.payload };
    case POST_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
