import { AUTHOR_LIST_PARSE, CURRENT_AUTHOR_PARSE } from "action/author-action";
import { IAction, TAuthorAction } from "model/action";
import { IAuthorState } from "model/author";

const INITIAL_STATE: IAuthorState = {
  current: {
    description: "",
    firstname: "",
    lastname: "",
  },
  list: [],
};

export default (state: IAuthorState = INITIAL_STATE, action: IAction<TAuthorAction>) => {
  switch (action.type) {
    case CURRENT_AUTHOR_PARSE:
      return { ...state, current: action.payload };
    case AUTHOR_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
