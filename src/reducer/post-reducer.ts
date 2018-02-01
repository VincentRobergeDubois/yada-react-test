import {
  CURRENT_POST_PARSE,
  IPostAction,
  IS_POST_FORM_PARSE,
  POST_LIST_PARSE,
} from "action/post-action";
import { IPostState } from "model/post";

const INITIAL_STATE: IPostState = {
  current: { id: 0, title: "", content: "", image: "" },
  isForm: false,
  list: [],
};

export default (state: IPostState = INITIAL_STATE, action: IPostAction) => {
  switch (action.type) {
    case CURRENT_POST_PARSE:
      return { ...state, current: action.payload };
    case IS_POST_FORM_PARSE:
      return { ...state, isForm: action.payload };
    case POST_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
