import { CURRENT_POST_PARSE, POST_LIST_PARSE } from "action/post-action";
import { IAction, TPostAction } from "model/action";
import { IPostState } from "model/post";

const INITIAL_STATE: IPostState = {
  current: { id: 0, title: "", content: "", image: "" },
  list: [],
};

export default (state: IPostState = INITIAL_STATE, action: IAction<TPostAction>) => {
  switch (action.type) {
    case CURRENT_POST_PARSE:
      return { ...state, current: action.payload };
    case POST_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
