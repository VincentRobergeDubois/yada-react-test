import * as React from "react";
import { Column, Row } from "react-foundation";

import UserBar from "component/user-bar";

class Tools extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="admin-container" isExpanded={true}>
        <Column id="content">
          <UserBar />
          <span>Tools</span>
        </Column>
      </Row>
    );
  }
}

export default Tools;
