import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Row, Column } from 'react-foundation';

import Guest from '../../view/guest';
import Manager from '../../view/manager';

const App = (props) => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Guest} />
      <Route path="/:userid" component={Manager} />
    </div>
  </BrowserRouter>
);

export default App;
