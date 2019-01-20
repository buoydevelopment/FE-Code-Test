
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DrinksScreen from './screens/Drinks';
import DrinkScreen from './screens/Drink';



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Drinks: DrinksScreen,
    Drink: DrinkScreen
  },
  {
    initialRouteName: "Drinks",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4ebcd1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);