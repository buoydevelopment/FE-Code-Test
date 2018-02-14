import React from 'react'
import {
  StackNavigator,
} from 'react-navigation';

import {
  DrinksScreen,
  DrinkDetailScreen
} from './../container/index';

const AppRoutes = StackNavigator({
  Home: { screen: DrinksScreen },
  Details: { screen: DrinkDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    })
  } 
});

export default AppRoutes;