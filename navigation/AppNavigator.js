import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import CocktailListScreen from '../screens/CocktailListScreen';
import CocktailDetailScreen from '../screens/CocktailDetailScreen';


const MainNavigator = createStackNavigator({
  CocktailList:   {screen: CocktailListScreen},
  CocktailDetail: {screen: CocktailDetailScreen},
});

export default createAppContainer(MainNavigator);