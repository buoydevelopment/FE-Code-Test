import React from 'react';
import Header from "./Header";
import CocktailList from "./CocktailList";
import LoadingOverlay from "react-loading-overlay";
import Context from '../Context';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CocktailDetailsList from "./CocktailDetailsList";

const Root = props => {
  return (
  <Context.Consumer>

    {(context) => {

      return (
      <LoadingOverlay
      active={context.loading}
      spinner
      style={{}}
      text='Loading your content...'
      >
        <div className="App">
          <Header/>
          <Route exact path={'/'} component={CocktailList} />
          <Route path={'/:id'} component={CocktailDetailsList} />
        </div>
      </LoadingOverlay>
      )


    }}
  </Context.Consumer>
  );
};

Root.propTypes = {};

export default Root;
