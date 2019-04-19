import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import { styles, backImage } from './src/Utils/navigation';
import colors from './src/Utils/colors';
import DrinksScreen from './src/screens/Drinks/Drinks';
import DrinkDetailScreen from './src/screens/DrinkDetail/DrinkDetail';

const AppNavigator = createStackNavigator(
    {
      Home: DrinksScreen,
      Details: DrinkDetailScreen
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.mainAppColor,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.headerTintColor,
        headerBackImage: (<Image style={styles.myCustomHeaderBackImage} source={backImage}/>)
      },
    }
);

export default createAppContainer(AppNavigator);
