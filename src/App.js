import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Drinks</h1>
        </header>
        <p className="App-intro">
          {(this.props.loadingDrinks) ? 'Loading...' : this.renderDrinks()}
        </p>
      </div>
    );
  }

  renderDrinks() {
    const { drinks } = this.props;

    return JSON.stringify(drinks);
  }

  componentDidMount() {
    const { getDrinks } = this.props;

    if (getDrinks) getDrinks('Cocktail_glass');
  }
}

export default App;
