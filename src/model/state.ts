import { IBookState } from "model/book";
import { IFormState } from "model/form";
import { IMenuItemState } from "model/menu-item";
import { IOrganisationState } from "model/organisation";
import { IPostState } from "model/post";
import { IServiceState } from "model/service";
import { IUserState } from "model/user";

export interface IState {
  book: IBookState;
  form: IFormState;
  menuItem: IMenuItemState;
  organisation: IOrganisationState;
  post: IPostState;
  service: IServiceState;
  user: IUserState;
}
