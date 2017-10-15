import * as React from 'react';
import { Route } from 'react-router-dom';
import { Row, Column } from 'react-foundation';

import UserBar from '../../container/user-bar';
import Tools from '../../container/tools';
import Admin from '../../container/admin';

class Manager extends React.Component {
  render() {
    return (
      <Row id="main-content" isExpanded>
        <Column>
          <UserBar />
          <Route path="tools" component={Tools} />
          <Route path="admin" component={Admin} />
        </Column>
      </Row>
    );
  }
}

export default Manager;
