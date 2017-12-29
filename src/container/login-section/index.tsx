import * as React from "react";

import * as H from "history";
import { Row } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { loadMenuItemList } from "action/menu-item-action";
import { connection, loadUser } from "action/user-action";
import { IState } from "model/state";
import { required } from "service/form-validator";
import { ILoginSectionValues } from "./model";

import Input from "component/input";

interface ILoginSectionOwnProps {
  history: H.History;
}

interface ILoginSectionDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  loadUser: typeof loadUser;
  connection: typeof connection;
}

type TLoginSectionProps = ILoginSectionOwnProps & ILoginSectionDispatchProps;
type InjectedProps = InjectedFormProps<ILoginSectionValues, TLoginSectionProps>;

class LoginSection extends React.PureComponent<TLoginSectionProps & InjectedProps, {}> {
  public render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleLogin())}>
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

  private handleLogin = () => (formData: ILoginSectionValues): void => {
    this.props.connection(formData.username, formData.password);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginSectionDispatchProps => {
  return {
    connection: bindActionCreators(connection, dispatch),
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch),
  };
};

export default reduxForm<ILoginSectionValues, ILoginSectionOwnProps>({
  form: "loginSectionForm",
})(connect<{}, ILoginSectionDispatchProps, ILoginSectionOwnProps>(null, mapDispatchToProps)(LoginSection));
