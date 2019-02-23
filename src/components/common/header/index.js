import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import MenuIcon from '../../../assets/icons/menu.png';
import VigitLogo from '../../../assets/images/general/logo/logo.png';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.menuIconContainer} onPress={onPress}>
      <Image source={MenuIcon} style={styles.menuIcon} />
    </TouchableOpacity>
    <View style={styles.logoContainer}>
      <Image source={VigitLogo} style={styles.logo} />
    </View>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

Header.defaultProps = {
  onPress: () => {},
};

export default Header;
