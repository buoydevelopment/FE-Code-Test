import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Styles/HeaderStyle";
import { Colors } from "../Themes";

export default class Header extends Component {
  static defaultProps = {
    leftButtonIcon: null,
    onPressLeftButton: null,
    onPressRightButton: null,
    rightButtonIcon: null,
    title: "Screen Title"
  };

  static propTypes = {
    leftButtonIcon: PropTypes.string,
    onPressLeftButton: PropTypes.func,
    onPressRightButton: PropTypes.func,
    rightButtonIcon: PropTypes.string,
    title: PropTypes.string
  };

  onLeftPress = () => {
    const { onPressLeftButton } = this.props;
    onPressLeftButton();
  };

  onRightPress = () => {
    const { onPressRightButton } = this.props;
    onPressRightButton();
  };

  render() {
    const { leftButtonIcon, rightButtonIcon, title } = this.props;

    const leftIcon = leftButtonIcon ? (
      <TouchableOpacity onPress={this.onLeftPress}>
        <Icon name={leftButtonIcon} size={30} color={Colors.silver} />
      </TouchableOpacity>
    ) : null;

    const rightIcon = rightButtonIcon ? (
      <TouchableOpacity onPress={this.onRightPress}>
        <Icon name={rightButtonIcon} size={30} color={Colors.silver} />
      </TouchableOpacity>
    ) : null;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>{leftIcon}</View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonContainer}>{rightIcon}</View>
      </View>
    );
  }
}
