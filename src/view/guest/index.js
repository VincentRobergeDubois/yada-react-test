import * as React from 'react';
import { Route } from 'react-router-dom';
import { Row, Column } from 'react-foundation';

import SideBar from '../../component/side-bar';
import UserBar from '../../container/user-bar';
import MenuBar from '../../container/menu-bar';
import Home from '../../container/home';
import Services from '../../container/services';
import Contact from '../../container/contact';

class Guest extends React.Component {
  render() {
    return (
      <Row id="main-content" isExpanded>
        <SideBar />
        <Column id="content">
          <UserBar />
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route path="services" component={Services} />
          <Route path="contact" component={Contact} />
        </Column>
      </Row>
    );
  }
}

export default Guest;
