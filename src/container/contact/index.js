import * as React from 'react';
import { Row, Column } from 'react-foundation';
import SideBar from '../../component/side-bar';
import UserBar from '../../container/user-bar';
import MenuBar from '../../container/menu-bar';

class Contact extends React.Component {
  render() {
    return (
      <Row id="contact-container" isExpanded>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
          <div>Contact Page</div>
        </Column>
      </Row>
    );
  }
}

export default Contact;
