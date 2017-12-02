import * as React from "react";
import { Alignments, Column, Icon, Row } from "react-foundation";
import { Link } from "react-router-dom";

class UserBar extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Row id="user-bar" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
          </Link>
        </Column>
        <Link className="login-btn" to="/login"><Icon name="fi-torso" /></Link>
      </Row>
    );
  }
}

export default UserBar;
