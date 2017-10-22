import * as React from 'react';
import { Row, Column } from 'react-foundation';
import UserBar from '../../container/user-bar';

class Tools extends React.Component {
  render() {
    return (
      <Row id="tools-container" isExpanded>
        <Column>
          <UserBar />
          <div>Tools Page</div>
        </Column>
      </Row>
    );
  }
}

export default Tools;
