import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import { IManagerForm } from "model/manager";
import { IOrganisationFormValues } from "model/organisation";

interface IOrganisationManagerFormOwnProps extends IManagerForm<IOrganisationFormValues> { }

type TOrganisationManagerformProps = IOrganisationManagerFormOwnProps;
type InjectedProps = InjectedFormProps<IOrganisationFormValues, TOrganisationManagerformProps>;

class OrganisationManagerForm extends React.PureComponent<TOrganisationManagerformProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        Form
      </form>
    );
  }
}

export default reduxForm<IOrganisationFormValues, TOrganisationManagerformProps>({
})(OrganisationManagerForm);
