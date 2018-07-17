import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';

// Pages
import HomeContainer from './containers/home_container';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="page container">
              <main className="main-content">
                <Route exact path="/" component={HomeContainer} />
              </main>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;