import React from 'react';
import { Route, Switch } from "react-router";

import DrinksList from './containers/DrinksList';
import Drink from './containers/Drink';

export default () => {
 return (
    <Switch>
        <Route exact path="/" component={DrinksList} />
        <Route exact path="/drink/:id" component={Drink} />
    </Switch>
    
 )
}