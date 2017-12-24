import * as React from "react";

import { Alignments, Column, Row } from "react-foundation";
import { RouteComponentProps } from "react-router-dom";

import SideBar from "component/side-bar";
import LoginSection from "container/login-section";

class Login extends React.PureComponent<RouteComponentProps<{}>, {}> {
  public render(): JSX.Element {
    return (
      <Row id="login-container" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column className="sidebar" medium={6} large={6} >
          <SideBar link="/" image="./images/yada-logo.png" />
        </Column>
        <Column className="form" large={6}>
          <LoginSection history={this.props.history} />
        </Column>
      </Row>
    );
  }
}

export default Login;
