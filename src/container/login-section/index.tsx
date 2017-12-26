import * as React from "react";

import * as H from "history";
import { Column, Row } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { loadUser } from "action/user-action";
import { IState } from "model/state";

interface ILoginSectionOwnProps {
  history: H.History;
}

interface ILoginSectionDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  loadUser: typeof loadUser;
}

type TLoginSectionProps = ILoginSectionOwnProps & ILoginSectionDispatchProps;

class LoginSection extends React.PureComponent<TLoginSectionProps, {}> {
  public render() {
    return (
      <form onSubmit={this.handleLogin()}>
        <Row>
          <Column large={12}>
            <label>Nom d'utilisateur</label>
            <input name="username" type="text" />
          </Column>
        </Row>
        <Row>
          <Column large={12}>
            <label>Mot de passe</label>
            <input name="password" type="password" />
          </Column>
        </Row>
        <button type="submit" className="button expanded">Connexion</button>
      </form>
    );
  }

  private handleLogin = () => (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.loadUser(1);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginSectionDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch),
  };
};

export default connect<{}, ILoginSectionDispatchProps, {}>(null, mapDispatchToProps)(LoginSection);
