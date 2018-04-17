import * as React from "react";

import * as H from "history";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { login } from "action/user-action";
import { IState } from "model/state";
import { ILoginFormValues } from "./model";

import LoginForm from "./component/login-form";

interface ILoginSectionOwnProps {
  history: H.History;
}

interface ILoginSectionDispatchProps {
  login: typeof login;
}

type TLoginSectionProps = ILoginSectionOwnProps & ILoginSectionDispatchProps;

class LoginSection extends React.PureComponent<TLoginSectionProps, {}> {
  public render() {
    return (
      <div className="login-section">
        <LoginForm
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }

  private handleLogin = () => (formValues: ILoginFormValues): void => {
    this.props.login(formValues.username, formValues.password);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginSectionDispatchProps => {
  return {
    login: bindActionCreators(login, dispatch),
  };
};

export default connect<{}, ILoginSectionDispatchProps, ILoginSectionOwnProps>(
  null,
  mapDispatchToProps,
)(LoginSection);
