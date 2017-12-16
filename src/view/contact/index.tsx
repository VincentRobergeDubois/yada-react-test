import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import InfoSection from "container/info-section";
import TopBar from "container/top-bar";

class Contact extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="contact-container" isExpanded={true}>
        <SideBar
          link="/"
          image="./images/sideBarImage.jpg"
          mediumSize={6}
          largeSize={4}
        />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <InfoSection />
        </Column>
      </Row>
    );
  }
}

export default Contact;
