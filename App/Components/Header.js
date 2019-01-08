import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Styles/HeaderStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../Themes';
export default class Header extends Component {

  // Prop type warnings
  static propTypes = {
    onPressLeftButton: PropTypes.func,
    leftButtonIcon: PropTypes.string,
    rightButtonIcon: PropTypes.string,
    onPressRightButton: PropTypes.func,
    title: PropTypes.string,
  };

  _onLeftPress = () => {
    this.props.onPressLeftButton(this.props.idDrink)
  };

  _onRightPress = () => {
    this.props.onPressRightButton(this.props.idDrink)
  };

  render () {
    const { leftButtonIcon, rightButtonIcon , title  } = this.props;
    const leftIcon= leftButtonIcon ?<TouchableOpacity onPress={this._onLeftPress}>
        <Icon name={leftButtonIcon} size={30} color={Colors.silver} />
      </TouchableOpacity> : null;

    const rightIcon= rightButtonIcon ?<TouchableOpacity onPress={this._onRightPress}>
        <Icon name={rightButtonIcon} size={30} color={Colors.silver} />
      </TouchableOpacity> : null;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {leftIcon}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonContainer}>
          {rightIcon}
        </View>
      </View>
    )
  }
}
