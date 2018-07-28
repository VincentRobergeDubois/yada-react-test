import { IAuthorState } from "model/author";
import { IBookState } from "model/book";
import { IEditorState } from "model/editor";
import { IFormState } from "model/form";
import { IMenuItemState } from "model/menu-item";
import { IOrganisationState } from "model/organisation";
import { IPostState } from "model/post";
import { IServiceState } from "model/service";
import { IUserState } from "model/user";

export interface IState {
  author: IAuthorState;
  book: IBookState;
  editor: IEditorState;
  form: IFormState;
  menuItem: IMenuItemState;
  organisation: IOrganisationState;
  post: IPostState;
  service: IServiceState;
  user: IUserState;
}
