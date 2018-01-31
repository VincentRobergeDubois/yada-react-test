import * as React from "react";

import SideBar from "component/side-bar";
import ServicesSection from "container/services-section";
import TopBar from "container/top-bar";

class Services extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div id="service-container">
        <SideBar link="/" image="./images/sideBarImage.jpg" />
        <div className="content">
          <TopBar isGuestPage={true} />
          <ServicesSection />
        </div>
      </div>
    );
  }
}

export default Services;
