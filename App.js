import { createStackNavigator, createAppContainer } from "react-navigation";
import { DrinksScreen } from "./src/screens/Drinks/drinks";

const AppNavigator = createStackNavigator({
  Home: {
    screen: DrinksScreen
  }
});

export default createAppContainer(AppNavigator);
