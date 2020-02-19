import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/transactions/:option" component={Transactions} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
