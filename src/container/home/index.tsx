import * as React from "react";
import { Column, Row } from "react-foundation";

import MenuBar from "component/menu-bar";
import SideBar from "component/side-bar";
import UserBar from "component/user-bar";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="home-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
          <span>Home</span>
        </Column>
      </Row>
    );
  }
}

export default Home;
