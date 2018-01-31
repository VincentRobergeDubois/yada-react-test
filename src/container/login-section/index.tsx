import * as React from "react";

import * as H from "history";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMainMenuItemList } from "action/menu-item-action";
import { loadUser, login } from "action/user-action";
import { IState } from "model/state";
import { ILoginFormValues } from "./model";

import LoginForm from "./component/login-form";

interface ILoginSectionOwnProps {
  history: H.History;
}

interface ILoginSectionDispatchProps {
  loadMainMenuItemList: typeof loadMainMenuItemList;
  loadUser: typeof loadUser;
  login: typeof login;
}

type TLoginSectionProps = ILoginSectionOwnProps & ILoginSectionDispatchProps;

class LoginSection extends React.PureComponent<TLoginSectionProps, {}> {
  public render() {
    return (
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }

  private handleLogin = () => (formData: ILoginFormValues): void => {
    this.props.login(formData.username, formData.password);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginSectionDispatchProps => {
  return {
    loadMainMenuItemList: bindActionCreators(loadMainMenuItemList, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch),
    login: bindActionCreators(login, dispatch),
  };
};

export default connect<{}, ILoginSectionDispatchProps, ILoginSectionOwnProps>(
  null,
  mapDispatchToProps,
)(LoginSection);
