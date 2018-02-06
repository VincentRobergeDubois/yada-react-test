import { ILoginForm, ILoginFormFields, ILoginFormValues } from "container/login-section/model";
import { IOrganisationForm, IOrganisationFormFields, IOrganisationFormValues } from "model/organisation";
import { IPostForm, IPostFormFields, IPostFormValues } from "model/post";
import { IServiceForm, IServiceFormFields, IServiceFormValues } from "model/service";
import { IUserForm, IUserFormFields, IUserFormValues } from "model/user";

interface IForm<Fo, Fi, Va> {
  registeredFields: Fo;
  fields?: Fi;
  values?: Va;
  active?: string;
  anyTouched?: boolean;
  submitting?: boolean;
  submitErrors?: Va;
  submitFailed?: boolean;
}

export interface IFormState {
  loginForm: IForm<ILoginForm, ILoginFormFields, ILoginFormValues>;
  organisationForm: IForm<IOrganisationForm, IOrganisationFormFields, IOrganisationFormValues>;
  postForm: IForm<IPostForm, IPostFormFields, IPostFormValues>;
  serviceForm: IForm<IServiceForm, IServiceFormFields, IServiceFormValues>;
  userForm: IForm<IUserForm, IUserFormFields, IUserFormValues>;
}
