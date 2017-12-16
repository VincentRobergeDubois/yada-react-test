import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import NewsSection from "container/news-section";
import TopBar from "container/top-bar";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="home-container" isExpanded={true}>
        <SideBar
          link="/"
          image="./images/sideBarImage.jpg"
          mediumSize={6}
          largeSize={4}
        />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <NewsSection />
        </Column>
      </Row>
    );
  }
}

export default Home;
