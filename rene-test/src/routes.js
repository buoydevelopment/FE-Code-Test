import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);

export default Routes;
