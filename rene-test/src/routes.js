import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CocktailList from './containers/CocktailList';
import CocktailDetails from './containers/CocktailDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={CocktailList} />
    <Route exact path="/cocktails" component={CocktailList} />
    <Route exact path="/cocktails/:id" component={CocktailDetails} />
  </Switch>
);

export default Routes;
