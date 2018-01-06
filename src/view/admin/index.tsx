import * as React from "react";

import { Column, Row } from "react-foundation";

import AdminSection from "container/admin-section";
import TopBar from "container/top-bar";

class Admin extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="admin-container" isExpanded={true}>
        <Column id="content">
          <TopBar />
          <AdminSection />
        </Column>
      </Row>
    );
  }
}

export default Admin;
