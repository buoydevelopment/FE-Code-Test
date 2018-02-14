import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import AppRoutes from './src/config/AppRoutes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}