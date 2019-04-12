import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CocktailList from './app/Screens/CocktailList/CocktailList';
import CocktailDetail from './app/Screens/CocktailDetail/CocktailDetail';
import configureStore from './app/configureStore';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    CocktailList: {
      screen: CocktailList,
    },
    CocktailDetail: {
      screen: CocktailDetail,
    },
  },
  {
    initialRouteName: 'CocktailList',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
