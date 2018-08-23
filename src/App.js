import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Pages
import HomeContainer from './containers/home_container';
import RecipeContainer from './containers/recipe_container.js';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app page">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink to={"/"} className="navbar-brand">Random Drinks 1.0</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
            </nav>
            <div className="app page container-fluid">
              <div className="col-12">
                <main className="row">
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/recipe/:id" component={RecipeContainer} />
                </main>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
