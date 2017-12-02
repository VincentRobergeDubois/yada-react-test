import * as React from "react";
import { Alignments, Column, Row } from "react-foundation";
import { Link } from "react-router-dom";

interface ILoginOwnProps {
  handleSubmit: () => void;
}

type TLoginProps = ILoginOwnProps;

class Login extends React.PureComponent<TLoginProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="login-container" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column className="logo" large={6}>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" />
          </Link>
        </Column>
        <Column className="form" large={6}>
          <form onSubmit={this.props.handleSubmit}>
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
}

export default Login;
