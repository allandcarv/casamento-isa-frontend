import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/home';
import PageNotFound from '../pages/PageNotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/404" component={PageNotFound} />
    <Redirect from="*" to="/404" />
  </Switch>
);

export default Routes;
