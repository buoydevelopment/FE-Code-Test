import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
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
                    <div className="app">
                        <header>
                            <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
                                <a className="mx-auto" href="#">Random drinks 0.1</a>
                                <form id="demo-2" className="form-inline">
                                    <input type="search" placeholder="Search"/>
                                </form>
                            </nav>
                        </header>
                        <div className="page container">
                            <main className="main-content">
                                <Route exact path="/" component={HomeContainer} />
                                <Route exact path="/recipe/:id" component={RecipeContainer} />
                            </main>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
