import { combineReducers } from 'redux';
import MenuItemReducer from './menu-item-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  menuItems: MenuItemReducer,
  posts: PostReducer
});

export default rootReducer;
