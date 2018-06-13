import React, { Component } from 'react';
import './app.css';
import DrinkList from './containers/drink-list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Random drinks 0.1</h1>
        </header>
        <div className="app-content">
          <DrinkList/>
        </div>
      </div>
    );
  }
}

export default App;
