import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import UserConnReducer from './user-conn-reducer';
import MenuItemReducer from './menu-item-reducer';
import PostReducer from './post-reducer';
import ServiceReducer from './service-reducer';
import OrganisationReducer from './organisation-reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  userConn: UserConnReducer,
  menuItem: MenuItemReducer,
  post: PostReducer,
  service: ServiceReducer,
  organisation: OrganisationReducer
});

export default rootReducer;
