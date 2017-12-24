import * as React from "react";

import { Alignments, Column, Row } from "react-foundation";
import { RouteComponentProps } from "react-router-dom";

import SideBar from "component/side-bar";
import LoginSection from "container/login-section";

class Login extends React.PureComponent<RouteComponentProps<{}>, {}> {
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
          <LoginSection history={this.props.history} />
        </Column>
      </Row>
    );
  }
}

export default Login;
