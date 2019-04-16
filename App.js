import DrinksScreen from "./src/screens/Drinks/drinks";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: DrinksScreen
  }
});

export default createAppContainer(AppNavigator);