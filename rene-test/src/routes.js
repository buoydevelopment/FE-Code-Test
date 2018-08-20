import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import CocktailList from './containers/CocktailList/CocktailList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/cocktail-list" component={CocktailList} />
  </Switch>
);

export default Routes;
