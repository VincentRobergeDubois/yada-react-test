import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IAuthorFormValues } from "model/author";
import { IManagerForm } from "model/manager";
import { required } from "service/field-validator";

interface IAuthorManagerFormOwnProps extends IManagerForm<IAuthorFormValues> { }

type TAuthorManagerFormProps = IAuthorManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IAuthorFormValues, TAuthorManagerFormProps>;

class AuthorManagerForm extends React.PureComponent<TAuthorManagerFormProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <Field
          component={Input}
          label="Nom"
          name="lastname"
          type="text"
          validate={required}
        />
        <Field
          component={Input}
          label="Prénom"
          name="firstname"
          type="text"
          validate={required}
        />
        <Field
          component={Input}
          label="Description"
          name="description"
          type="text"
          validate={required}
        />
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IAuthorFormValues, TAuthorManagerFormProps>({
})(AuthorManagerForm);
