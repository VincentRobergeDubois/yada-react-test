import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import YadaButton from "component/yada-button";
import Input from "lib/form/input";
import { IManagerForm } from "model/manager";
import { IOrganisationFormValues } from "model/organisation";
import { required } from "service/field-validator";

interface IOrganisationManagerFormOwnProps extends IManagerForm<IOrganisationFormValues> { }

type TOrganisationManagerformProps = IOrganisationManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IOrganisationFormValues, TOrganisationManagerformProps>;

class OrganisationManagerForm extends React.PureComponent<TOrganisationManagerformProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <Field
          component={Input}
          label="Nom"
          name="name"
          type="text"
          validate={[required]}
        />
        <Field
          component={Input}
          label="Abréviation"
          name="abreviation"
          type="text"
          validate={[required]}
        />
        <Field
          component={Input}
          label="Siège social"
          name="headOffice"
          type="text"
          validate={[required]}
        />
        <Field
          component={Input}
          label="Courriel"
          name="email"
          type="text"
          validate={[required]}
        />
        <Field
          component={Input}
          label="Numéro de téléphone"
          name="phone"
          type="text"
          validate={[required]}
        />
        <Field
          component={Input}
          label="Extension"
          name="extension"
          type="text"
          validate={[required]}
        />
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IOrganisationFormValues, TOrganisationManagerformProps>({
})(OrganisationManagerForm);
