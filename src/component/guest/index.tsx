import * as React from 'react';
import { Row, Column } from 'react-foundation';
import SideBar from 'component/side-bar';
import UserBar from 'container/user-bar';
import MenuBar from 'container/menu-bar';

class Guest extends React.Component {
  render() {
    return (
      <Row id="home-container" isExpanded>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
            {this.props.children}
        </Column>
      </Row>
    );
  }
}

export default Guest;
