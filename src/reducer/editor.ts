import { CURRENT_EDITOR_PARSE, EDITOR_LIST_PARSE } from "action/editor-action";
import { IAction, TEditorAction } from "model/action";
import { IEditorState } from "model/editor";

const INITIAL_STATE: IEditorState = {
  current: {
    id: 0,
    name: "",
  },
  list: [],
};

export default (state: IEditorState = INITIAL_STATE, action: IAction<TEditorAction>) => {
  switch (action.type) {
    case CURRENT_EDITOR_PARSE:
      return { ...state, current: action.payload };
    case EDITOR_LIST_PARSE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
