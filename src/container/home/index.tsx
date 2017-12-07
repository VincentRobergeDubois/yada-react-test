import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import TopBar from "container/top-bar";

import PostList from "./component/post-list";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="home-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <PostList />
        </Column>
      </Row>
    );
  }
}

export default Home;
