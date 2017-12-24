import * as React from "react";

import { Alignments, Column, Row } from "react-foundation";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { loadUser } from "action/user-action";
import { IState } from "model/state";

import SideBar from "component/side-bar";

interface ILoginDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  loadUser: typeof loadUser;
}

type TLoginProps = RouteComponentProps<{}> & ILoginDispatchProps;

class Login extends React.PureComponent<TLoginProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="login-container" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <SideBar
          link="/"
          image="./images/yada-logo.png"
          mediumSize={6}
          largeSize={6}
        />
        <Column className="form" large={6}>
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
        </Column>
      </Row>
    );
  }

  private handleLogin = () => (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.loadUser(1);
    this.props.loadMenuItemList(1, 1);
    this.props.history.push("/tools");
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>): ILoginDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch),
  };
};

export default connect<{}, ILoginDispatchProps, {}>(null, mapDispatchToProps)(Login);
