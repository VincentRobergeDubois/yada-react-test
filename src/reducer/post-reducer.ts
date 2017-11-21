import { IPostAction, LOAD_POST, LOAD_POST_LIST } from 'action';

const INITIAL_STATE = {
  post: null,
  postList: []
};

export default (state: any = INITIAL_STATE, action: IPostAction) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, post: action.payload };
    case LOAD_POST_LIST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
}
