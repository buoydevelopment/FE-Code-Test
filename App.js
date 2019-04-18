import React from 'react';
import { Image, StyleSheet } from 'react-native'
import DrinksScreen from "./src/screens/Drinks/Drinks";
import DrinkDetailScreen from "./src/screens/DrinkDetail/DrinkDetail";
import backImage from './src/assets/back-arrow.png'

import { createStackNavigator, createAppContainer } from "react-navigation";


const styles = StyleSheet.create({
  myCustomHeaderBackImage: {
    height: 21,
    width: 27,
    marginLeft: 12,
    resizeMode: 'contain',
  },
});

const AppNavigator = createStackNavigator(
    {
      Home: DrinksScreen,
      Details: DrinkDetailScreen
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#53BCD0',
          borderBottomWidth: 0,
        },
        headerTintColor: '#FFF',
        headerBackImage: (<Image style={styles.myCustomHeaderBackImage} source={backImage}/>)
      },
    }
);

export default createAppContainer(AppNavigator);