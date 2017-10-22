import * as React from 'react';
import { Row, Column } from 'react-foundation';
import UserBar from '../../container/user-bar';

class Admin extends React.Component {
  render() {
    return (
      <Row id="admin-container" isExpanded>
        <Column>
          <UserBar />
          <div>Admin Page</div>
        </Column>
      </Row>
    );
  }
}

export default Admin;
