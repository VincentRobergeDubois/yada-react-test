import { ILoginSectionFields, ILoginSectionForm, ILoginSectionValues } from "container/login-section/model";

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
  loginSectionForm: IForm<ILoginSectionForm, ILoginSectionFields, ILoginSectionValues>;
}
