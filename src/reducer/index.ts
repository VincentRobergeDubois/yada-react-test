import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import MenuItemReducer from "reducer/menu-item-reducer";
import OrganisationReducer from "reducer/organisation-reducer";
import PostReducer from "reducer/post-reducer";
import ServiceReducer from "reducer/service-reducer";
import UserReducer from "reducer/user-reducer";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  menuItem: MenuItemReducer,
  organisation: OrganisationReducer,
  post: PostReducer,
  service: ServiceReducer,
  user: UserReducer,
});

export default rootReducer;
