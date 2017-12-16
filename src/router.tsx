import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "view/admin";
import Contact from "view/contact";
import Home from "view/home";
import Login from "view/login";
import Services from "view/services";
import Tools from "view/tools";

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
