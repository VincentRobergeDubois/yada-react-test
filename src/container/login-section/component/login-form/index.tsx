import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { required } from "service/form-validator";

import { LOGIN_SECTION_FORM_NAME } from "../../constant";
import { ILoginFormValues } from "../../model";

interface ILoginFormOwnProps {
  handleLogin: () => (formValues: ILoginFormValues) => void;
}

type TLoginFormProps = ILoginFormOwnProps;
type InjectedProps = InjectedFormProps<ILoginFormValues, TLoginFormProps>;

class LoginForm extends React.PureComponent<TLoginFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleLogin())}>
        <Field
          name="username"
          label="Nom d'utilisateur"
          type="text"
          component={Input}
          validate={[ required ]}
        />
        <Field
          name="password"
          label="Mot de passe"
          type="password"
          component={Input}
          validate={[ required ]}
        />
        <YadaButton label="Connexion" type="submit" />
      </form>
    );
  }
}

export default reduxForm<ILoginFormValues, TLoginFormProps>({
  form: LOGIN_SECTION_FORM_NAME,
})(LoginForm);
