import "../Config";
import React, { Component } from "react";
import { Provider } from "react-redux";
import DebugConfig from "../Config/DebugConfig";
import RootContainer from "./RootContainer";
import createStore from "../Redux";

// create store
const store = createStore();

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron
  ? // eslint-disable-next-line no-console
    console.tron.overlay(App)
  : App);
