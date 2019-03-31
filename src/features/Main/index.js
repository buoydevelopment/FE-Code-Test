import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Main";
import CocktailDetails from "./CocktailDetails";

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Random Drinks"
      }
    },
    CocktailDetails: {
      screen: CocktailDetails,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("title")
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0086b3"
      },
      headerTintColor: "#fff"
    }
  }
);

export default createAppContainer(MainNavigator);
