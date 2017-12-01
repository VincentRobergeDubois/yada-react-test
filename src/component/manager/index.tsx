import * as React from "react";
import { Column, Row } from "react-foundation";

import UserBar from "container/user-bar";

class Manager extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
   return (
    <Row id="admin-container" isExpanded={true}>
      <Column>
        <UserBar />
        {this.props.children}
      </Column>
    </Row>
    );
  }
}

export default Manager;
