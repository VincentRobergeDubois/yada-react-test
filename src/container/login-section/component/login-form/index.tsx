import * as React from "react";

import { Row } from "react-foundation";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { required } from "service/form-validator";
import { LOGIN_SECTION_FORM_NAME } from "../../constant";
import { ILoginFormValues } from "../../model";

import Input from "component/input";

interface ILoginFormOwnProps {
  handleLogin: () => (formData: ILoginFormValues) => void;
}

type TLoginFormProps = ILoginFormOwnProps;
type InjectedProps = InjectedFormProps<ILoginFormValues, TLoginFormProps>;

class LoginForm extends React.PureComponent<TLoginFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleLogin())}>
        <Row>
          <Field
            name="username"
            label="Nom d'utilisateur"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </Row>
        <Row>
          <Field
            name="password"
            label="Mot de passe"
            type="password"
            component={Input}
            validate={[ required ]}
          />
        </Row>
        <button type="submit" className="button expanded" disabled={this.props.submitting}>Connexion</button>
      </form>
    );
  }
}

export default reduxForm<ILoginFormValues, TLoginFormProps>({
  form: LOGIN_SECTION_FORM_NAME,
})(LoginForm);
