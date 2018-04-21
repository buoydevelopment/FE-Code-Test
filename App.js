import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Root } from './Router';

export default class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}