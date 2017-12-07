import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import TopBar from "container/top-bar";

class Services extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="contact-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <span>Services</span>
        </Column>
      </Row>
    );
  }
}

export default Services;
