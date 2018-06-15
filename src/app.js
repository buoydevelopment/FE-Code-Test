import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from './components/root';
import DrinkDetails from './containers/drink-details';
export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Root} />
      <Route path="/:id" component={DrinkDetails} />
    </div>
  </Router>
);