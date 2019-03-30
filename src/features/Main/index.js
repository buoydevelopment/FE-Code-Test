import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Main";

const MainNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "Random Drinks",
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#0086b3"
    },
    headerTintColor: "#fff"
  }
});

export default createAppContainer(MainNavigator);
