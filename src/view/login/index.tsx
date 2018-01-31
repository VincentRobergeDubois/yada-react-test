import * as React from "react";

import { RouteComponentProps } from "react-router-dom";

import SideBar from "component/side-bar";
import LoginSection from "container/login-section";

class Login extends React.PureComponent<RouteComponentProps<{}>, {}> {
  public render(): JSX.Element {
    return (
      <div id="login-container">
        <SideBar link="/" image="./images/yada-logo.png" />
        <div className="content">
          <LoginSection history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default Login;
