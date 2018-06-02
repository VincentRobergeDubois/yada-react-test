import { BOOK_LIST_PARSE, CURRENT_BOOK_PARSE } from "action/book-action";
import { IAction, TBookAction } from "model/action";
import { IBookState } from "model/book";

const INITIAL_STATE: IBookState = {
  current: {
    description: "",
    title: "",
  },
  list: [],
};

export default (state: IBookState = INITIAL_STATE, action: IAction<TBookAction>) => {
  switch (action.type) {
    case CURRENT_BOOK_PARSE:
      return { ...state, current: action.payload };
    case BOOK_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
