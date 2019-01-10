import Immutable from "seamless-immutable";
import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import Config from "./DebugConfig";

if (Config.useReactotron) {
  Reactotron.configure({ name: "Ignite App" })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect();

  // Clears Reactotron every time we load the app
  Reactotron.clear();

  console.tron = Reactotron;
}
