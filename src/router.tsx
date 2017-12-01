import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "container/admin";
import Contact from "container/contact";
import Home from "container/home";
import Login from "container/login";
import Services from "container/services";
import Tools from "container/tools";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/services" component={Services} />
      <Route path="/tools" component={Tools} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Router;
