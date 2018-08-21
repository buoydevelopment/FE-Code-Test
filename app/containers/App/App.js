import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import CocktailList from 'containers/CocktailList/Loadable';
import CocktailDetail from 'containers/CocktailDetail/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Cocktail App v1.0"
      defaultTitle="Cocktail App v1.0"
    >
      <meta name="description" content="Cocktail App v1.0" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={CocktailList} />
      <Route exact path="/:id" component={CocktailDetail} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
