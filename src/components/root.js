import React, { Component } from 'react';
import './root.css';
import DrinkList from '../containers/drink-list';

class Root extends Component {
  render() {
    return (
      <div className="root">
        <header className="root-header">
          <h1 className="root-title">Random drinks 0.1</h1>
        </header>
        <div className="root-content">
          <DrinkList/>
        </div>
      </div>
    );
  }
}

export default Root;
