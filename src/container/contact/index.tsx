import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import TopBar from "container/top-bar";

class Contact extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="contact-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <span>Contact</span>
        </Column>
      </Row>
    );
  }
}

export default Contact;
