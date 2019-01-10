import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";

import { Images } from "../Themes";
import AppConfiguration from "../Config/AppConfig";
import RoutesConfiguration from "../Config/RoutesConfig";
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.timeoutHandle = setTimeout(() => {
      navigation.navigate(RoutesConfiguration.ROUTE_HOME);
    }, AppConfiguration.SPLASH_DURATION);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <View style={styles.centered}>
          <Image source={Images.launchLogo} style={styles.logo} />
        </View>
        <Text style={styles.slogan}>COCKTAILS APP</Text>
      </View>
    );
  }
}
