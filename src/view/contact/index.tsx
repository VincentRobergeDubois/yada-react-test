import * as React from "react";

import SideBar from "component/side-bar";
import InfoSection from "container/info-section";
import TopBar from "container/top-bar";

class Contact extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div id="contact-container">
        <SideBar link="/" image="./images/sideBarImage.jpg" />
        <div className="content">
          <TopBar isGuestPage={true} />
          <InfoSection />
        </div>
      </div>
    );
  }
}

export default Contact;
