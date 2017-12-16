import * as React from "react";

import axios from "axios";
import { Alignments, Column, Row } from "react-foundation";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { loadUserConn } from "action/user-conn-action";
import { IUserConn } from "model/user-conn";

import SideBar from "component/side-bar";

interface ILoginStateProps {
  userConn: IUserConn;
}

interface ILoginDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  loadUserConn: typeof loadUserConn;
}

type TLoginProps = RouteComponentProps<{}> & ILoginStateProps & ILoginDispatchProps;

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
    axios.get("http://localhost:3000/user-conn/1").then((response) => {
      this.props.loadUserConn(response.data.data);
      this.props.history.push("/tools");
    });
    axios.get("http://localhost:3000/menuItems/1/1").then((response) => {
      this.props.loadMenuItemList(response.data);
    });
  }
}

const mapStateToProps = (state: any): ILoginStateProps => {
  return {
    userConn: state.userConn.userConn,
  };
};

const mapDispatchToProps = (dispatch: any): ILoginDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    loadUserConn: bindActionCreators(loadUserConn, dispatch),
  };
};

export default connect<ILoginStateProps, ILoginDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Login);
