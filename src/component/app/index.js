import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SideBar from '../../component/side-bar';
import UserBar from '../../container/user-bar';
import MenuBar from '../../container/menu-bar';
import Home from '../../container/home';
import Services from '../../container/services';
import Tools from '../../container/tools';
import Contact from '../../container/contact';
import Admin from '../../container/admin';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/tools" component={Tools} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default App;
