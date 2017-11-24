import { combineReducers } from 'redux';
import MenuItemReducer from './menu-item-reducer';
import OrganisationReducer from './organisation-reducer';
import PostReducer from './post-reducer';
import ServiceReducer from './service-reducer';
import UserReducer from './user-reducer';
import UserConnReducer from './user-conn-reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  userConn: UserConnReducer,
  menuItem: MenuItemReducer,
  post: PostReducer,
  service: ServiceReducer,
  organisation: OrganisationReducer
});

export default rootReducer;
