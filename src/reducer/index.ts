import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import MenuItemReducer from './menu-item-reducer';
import PostReducer from './post-reducer';
import ServiceReducer from './service-reducer';
import OrganisationReducer from './organisation-reducer';

const rootReducer = combineReducers({
  users: UserReducer,
  menuItems: MenuItemReducer,
  posts: PostReducer,
  services: ServiceReducer,
  organisations: OrganisationReducer
});

export default rootReducer;
