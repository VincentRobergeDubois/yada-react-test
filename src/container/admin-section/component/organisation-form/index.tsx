import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IOrganisation } from "model/organisation";

import { ORGANISATION_FORM_NAME } from "../../constant";
import { IOrganisationFormValues } from "../../model";

interface IOrganisationFormOwnProps {
  handleFormSubmit: () => void;
  organisation: IOrganisation;
}

type TOrganisationFormProps = IOrganisationFormOwnProps;
type InjectedProps = InjectedFormProps<IOrganisationFormValues, TOrganisationFormProps>;

class OrganisationForm extends React.PureComponent<TOrganisationFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleFormSubmit)}>
        myForm
      </form>
    );
  }
}

export default reduxForm<IOrganisationFormValues, TOrganisationFormProps>({
  form: ORGANISATION_FORM_NAME,
})(OrganisationForm);
