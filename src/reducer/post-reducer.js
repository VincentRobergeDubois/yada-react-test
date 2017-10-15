import { FETCH_POSTS } from '../action';

const INITIAL_STATE = { posts: [] };

export default function(state  = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data };
    default:
      return state;
  }
}
