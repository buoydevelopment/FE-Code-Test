import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation'

import CocktailDetailView from './views/CocktailDetailView'
import CocktailList from './views/CocktailList'

const App = StackNavigator({
  List: {screen: CocktailList},
  Detail: {screen: CocktailDetailView},
}, { headerMode: "none" })


export default App

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ebcd1'
  }
});
