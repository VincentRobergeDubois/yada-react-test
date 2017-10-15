import { FETCH_MENU_ITEMS } from '../action';

const INITIAL_STATE = { menuItems: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
      return { ...state, menuItems: action.payload.data };
      return value;
    default:
      return state;
  }
}
