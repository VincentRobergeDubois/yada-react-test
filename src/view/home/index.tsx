import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import NewsSection from "container/news-section";
import TopBar from "container/top-bar";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="home-container" isExpanded={true}>
        <Column  className="sidebar" medium={6} large={4}>
          <SideBar link="/" image="./images/sideBarImage.jpg" />
        </Column>
        <Column id="content">
          <TopBar isGuestPage={true} />
          <NewsSection />
        </Column>
      </Row>
    );
  }
}

export default Home;
