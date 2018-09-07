import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IManagerForm } from "model/manager";
import { IUserFormValues } from "model/user";
import { required } from "service/field-validator";

interface IUserManagerFormOwnProps extends IManagerForm<IUserFormValues> { }

type TUserManagerFormProps = IUserManagerFormOwnProps;
type InjectedProps = InjectedFormProps<IUserFormValues, TUserManagerFormProps>;

class UserManagerForm extends React.PureComponent<TUserManagerFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <Field
          name="username"
          label="Nom d'utilisateur"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <Field
          name="firstname"
          label="Prénom"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <Field
          name="lastname"
          label="Nom de famille"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <Field
          name="email"
          label="Courriel"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <Field
          name="phone"
          label="Numéro de téléphone"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IUserFormValues, TUserManagerFormProps>({
})(UserManagerForm);
