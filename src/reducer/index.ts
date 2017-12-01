import { combineReducers } from "redux";

import MenuItemReducer from "reducer/menu-item-reducer";
import OrganisationReducer from "reducer/organisation-reducer";
import PostReducer from "reducer/post-reducer";
import ServiceReducer from "reducer/service-reducer";
import UserConnReducer from "reducer/user-conn-reducer";
import UserReducer from "reducer/user-reducer";

const rootReducer = combineReducers({
  menuItem: MenuItemReducer,
  organisation: OrganisationReducer,
  post: PostReducer,
  service: ServiceReducer,
  user: UserReducer,
  userConn: UserConnReducer,
});

export default rootReducer;
