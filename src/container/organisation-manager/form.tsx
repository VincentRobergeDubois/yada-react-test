import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IOrganisation, IOrganisationFormValues } from "model/organisation";

import { ORGANISATION_FORM_NAME } from "./constant";

interface IOrganisationFormOwnProps {
  handleCreateSubmit: () => void;
  handleUpdateSubmit: () => void;
  organisation: IOrganisation;
}

type TOrganisationFormProps = IOrganisationFormOwnProps;
type InjectedProps = InjectedFormProps<IOrganisationFormValues, TOrganisationFormProps>;

class OrganisationForm extends React.PureComponent<TOrganisationFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleCreateSubmit)}>
        myForm
      </form>
    );
  }
}

export default reduxForm<IOrganisationFormValues, TOrganisationFormProps>({
  form: ORGANISATION_FORM_NAME,
})(OrganisationForm);
