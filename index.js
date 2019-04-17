import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './App';
import store from './src/store/store';

const RNRedux = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('CocktailApp', () => RNRedux);