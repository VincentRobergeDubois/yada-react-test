import * as React from 'react';
import { Row, Column } from 'react-foundation';
import UserBar from '../../container/user-bar';

class Manager extends React.Component {
  render() {
   return (
    <Row id="admin-container" isExpanded>
      <Column>
        <UserBar />
        {this.props.children}
      </Column>
    </Row>
    );
  }
}

export default Manager;
