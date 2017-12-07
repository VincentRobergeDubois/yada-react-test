import * as React from "react";

import { Column, Row } from "react-foundation";

import TopBar from "container/top-bar";

class Tools extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="admin-container" isExpanded={true}>
        <Column id="content">
          <TopBar />
          <span>Tools</span>
        </Column>
      </Row>
    );
  }
}

export default Tools;
