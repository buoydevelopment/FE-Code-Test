import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";

import ReduxNavigation from "../Navigation/ReduxNavigation";
import styles from "./Styles/RootContainerStyles";

/* eslint-disable react/prefer-stateless-function */
class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

export default connect(
  null,
  null
)(RootContainer);
