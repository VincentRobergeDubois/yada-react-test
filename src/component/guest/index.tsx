import * as React from "react";
import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import MenuBar from "container/menu-bar";
import UserBar from "container/user-bar";

class Guest extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="home-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
            {this.props.children}
        </Column>
      </Row>
    );
  }
}

export default Guest;
