import * as React from "react";

import { Column, Row } from "react-foundation";

import TopBar from "container/top-bar";

class Admin extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="admin-container" isExpanded={true}>
        <Column id="content">
          <TopBar />
          <span>Admin</span>
        </Column>
      </Row>
    );
  }
}

export default Admin;
