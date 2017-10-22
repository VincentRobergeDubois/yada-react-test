import * as React from 'react';
import { Row, Column } from 'react-foundation';
import SideBar from '../../component/side-bar';
import UserBar from '../../container/user-bar';
import MenuBar from '../../container/menu-bar';

class Services extends React.Component {
  render() {
    return (
      <Row id="services-container" isExpanded>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
          <div>Services Page</div>
        </Column>
      </Row>
    );
  }
}

export default Services;
