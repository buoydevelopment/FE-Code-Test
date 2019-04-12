import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './HeaderStyles';

const Header = ({
  leftButtonIcon,
  onLeftButtonPress,
  title,
  rightButtonIcon,
  onRightButtonPress,
}) => {
  const leftIcon = leftButtonIcon ? (
    <TouchableOpacity onPress={onLeftButtonPress}>
      <Icon style={styles.headerItem} name={leftButtonIcon} />
    </TouchableOpacity>
  ) : null;

  const rightIcon = rightButtonIcon ? (
    <TouchableOpacity onPress={onRightButtonPress}>
      <Icon style={styles.headerItem} name={rightButtonIcon} />
    </TouchableOpacity>
  ) : null;

  return (
    <View style={styles.header}>
      <View>{leftIcon}</View>
      <Text style={styles.headerItem}>{title}</Text>
      <View>{rightIcon}</View>
    </View>
  );
};

Header.propTypes = {
  leftButtonIcon: PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  title: PropTypes.string,
  rightButtonIcon: PropTypes.string,
  onRightButtonPress: PropTypes.func,
};

Header.defaultProps = {
  leftButtonIcon: null,
  onLeftButtonPress: null,
  title: null,
  rightButtonIcon: null,
  onRightButtonPress: null,
};

export default Header;
