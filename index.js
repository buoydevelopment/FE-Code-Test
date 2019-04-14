import { Navigation } from "react-native-navigation";
import { registerScreens, startApp } from "./src/screens";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
