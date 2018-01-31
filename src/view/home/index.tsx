import * as React from "react";

import SideBar from "component/side-bar";
import NewsSection from "container/news-section";
import TopBar from "container/top-bar";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div id="home-container">
        <SideBar link="/" image="./images/sideBarImage.jpg" />
        <div className="content">
          <TopBar isGuestPage={true} />
          <NewsSection />
        </div>
      </div>
    );
  }
}

export default Home;
