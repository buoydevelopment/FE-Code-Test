import React from 'react';
import { StackNavigator } from 'react-navigation';

// Components for screens
import Home from './components/Home';
import DrinkDetail from './components/DrinkDetail';

export const HomeStack = StackNavigator({
    Home: {
    screen: Home,
    navigationOptions: {
      title: 'Random drinks 0.1',
      headerStyle: { backgroundColor: '#53BCD0', borderBottomColor: 'transparent' },
      headerTitleStyle: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
    }
  },
  DrinkDetail: {
    screen: DrinkDetail,
    navigationOptions: {
      headerStyle: { backgroundColor: '#53BCD0', borderBottomColor: 'transparent' },
      headerTitleStyle: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 }
    }
  },
});

export const Root = StackNavigator({
  HomeStack: {
    screen: HomeStack,
  },
}, {
  headerMode: 'none',
});