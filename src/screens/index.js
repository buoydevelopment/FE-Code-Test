import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import Drinks from "./Drinks";
import DrinkDetail from "./DrinkDetail";
import configureStore from "../store/store";

const store = configureStore();

export const startApp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            title: {
              text: "Random Drinks 0.1",
              color: "#eee",
              fontSize: 22
            },
            visible: true,
            background: {
              color: "#00acc5"
            },
            backButton: {
              color: "#eee"
            }
          }
        },
        children: [
          {
            component: {
              name: "drinks"
            }
          }
        ]
      }
    }
  });

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    "drinks",
    () => Drinks,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "drinkDetail",
    () => DrinkDetail,
    Provider,
    store
  );
}
