import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Image, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements'; 

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
     // send event when icon it's pressed onPress={ () => ref home .toggle()} 
     headerRight: <Icon name="search" color={"#fff"} size={35}  />
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