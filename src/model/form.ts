import {
  ILoginForm,
  ILoginFormFields,
  ILoginFormValues,
} from "container/login-section/model";
import {
  IOrganisationForm,
  IOrganisationFormFields,
  IOrganisationFormValues,
} from "container/organisation-manager/model";
import {
  IServiceForm,
  IServiceFormFields,
  IServiceFormValues,
} from "container/service-manager/model";
import {
  IUserForm,
  IUserFormFields,
  IUserFormValues,
} from "container/user-manager/model";

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
  serviceForm: IForm<IServiceForm, IServiceFormFields, IServiceFormValues>;
  userForm: IForm<IUserForm, IUserFormFields, IUserFormValues>;
}
