import DrinksScreen from "./src/screens/Drinks/Drinks";
import DrinkDetailScreen from "./src/screens/DrinkDetail/DrinkDetail";

import { createStackNavigator, createAppContainer } from "react-navigation";

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
        },
        headerTintColor: '#fff',
      },
    }
);

export default createAppContainer(AppNavigator);