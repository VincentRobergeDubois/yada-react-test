import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import BookReducer from "reducer/book";
import MenuItemReducer from "reducer/menu-item";
import OrganisationReducer from "reducer/organisation";
import PostReducer from "reducer/post";
import ServiceReducer from "reducer/service";
import UserReducer from "reducer/user";

const rootReducer = combineReducers({
  book: BookReducer,
  form: reduxFormReducer,
  menuItem: MenuItemReducer,
  organisation: OrganisationReducer,
  post: PostReducer,
  service: ServiceReducer,
  user: UserReducer,
});

export default rootReducer;
