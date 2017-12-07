import * as React from "react";

import axios from "axios";
import { Alignments, Column, Row } from "react-foundation";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { loadUserConn } from "action/user-conn-action";
import { IUserConn } from "model/user-conn";

interface ILoginOwnProps {
  history: any;
}

interface ILoginStateProps {
  userConn: IUserConn;
}

interface ILoginDispatchProps {
  loadUserConn: typeof loadUserConn;
}

type TLoginProps = ILoginOwnProps & ILoginStateProps & ILoginDispatchProps;

class Login extends React.PureComponent<TLoginProps, {}> {
  constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  public render(): JSX.Element {
    return (
      <Row id="login-container" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column className="logo" large={6}>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" />
          </Link>
        </Column>
        <Column className="form" large={6}>
          <form onSubmit={this.handleLogin}>
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

  private handleLogin = (event: any) => {
    event.preventDefault();
    axios.get("http://localhost:3000/user-conn/1").then((response) => {
      this.props.loadUserConn(response.data.data);
      this.props.history.push("/tools");
    });
  }
}

const mapStateToProps = (state: any): ILoginStateProps => {
  return {
    userConn: state.userConn,
  };
};

const mapDispatchToProps = (dispatch: any): ILoginDispatchProps => {
  return {
    loadUserConn: bindActionCreators(loadUserConn, dispatch),
  };
};

export default
connect<ILoginStateProps, ILoginDispatchProps, ILoginOwnProps>(mapStateToProps, mapDispatchToProps)(Login);
