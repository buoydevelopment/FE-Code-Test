import React from "react";
import { AppRegistry, View } from "react-native";
import { name as appName } from "./app.json";
import { Router, Scene } from "react-native-router-flux";
import Drinks from "./src/screens/Drinks";
import DrinksDetail from "./src/screens/DrinksDetail";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="Drinks" component={Drinks} title="Drinks" initial />
          <Scene
            key="DrinksDetail"
            component={DrinksDetail}
            title="DrinksDetail"
          />
        </Scene>
      </Router>
    </View>
  );
};

AppRegistry.registerComponent("code", () => App);
