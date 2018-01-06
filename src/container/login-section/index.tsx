import * as React from "react";

import * as H from "history";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { loadUser, login } from "action/user-action";
import { IState } from "model/state";
import { ILoginSectionValues } from "./model";

import LoginForm from "./component/login-form";

interface ILoginSectionOwnProps {
  history: H.History;
}

interface ILoginSectionDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  loadUser: typeof loadUser;
  login: typeof login;
}

type TLoginSectionProps = ILoginSectionOwnProps & ILoginSectionDispatchProps;

class LoginSection extends React.PureComponent<TLoginSectionProps, {}> {
  public render() {
    return (
      <LoginForm
        handleLogin={this.handleLogin}
      />
    );
  }

  private handleLogin = () => (formData: ILoginSectionValues): void => {
    this.props.login(formData.username, formData.password);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginSectionDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch),
    login: bindActionCreators(login, dispatch),
  };
};

export default connect<{}, ILoginSectionDispatchProps, ILoginSectionOwnProps>(null, mapDispatchToProps)(LoginSection);
