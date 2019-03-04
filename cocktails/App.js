import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Details from './screens/Details';
import { withCocktailContextProvider } from './contexts/CocktailContext';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Random drinks 1.0"
    }
  },
  Details: {
    screen: Details    
  }
}, {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#4EBCD1' }
    },
    cardStyle: { backgroundColor: '#4EBCD1' },
  });

const AppContainer = createAppContainer(AppNavigator);

export default withCocktailContextProvider(AppContainer);
