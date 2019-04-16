import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);

AppRegistry.registerComponent('CocktailApp', () => RNRedux);