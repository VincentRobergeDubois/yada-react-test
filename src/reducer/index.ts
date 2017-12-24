import { combineReducers } from "redux";

import MenuItemReducer from "reducer/menu-item-reducer";
import OrganisationReducer from "reducer/organisation-reducer";
import PostReducer from "reducer/post-reducer";
import ServiceReducer from "reducer/service-reducer";
import UserReducer from "reducer/user-reducer";

const rootReducer = combineReducers({
  menuItem: MenuItemReducer,
  organisation: OrganisationReducer,
  post: PostReducer,
  service: ServiceReducer,
  user: UserReducer,
});

export default rootReducer;
