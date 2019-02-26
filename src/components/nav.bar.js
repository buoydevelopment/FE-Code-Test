// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import * as Style from '../stylesheet';

type Props = {
  title: string,
  showBackButton: bool,
  onBack: () => any,
};

type State = void;

export default class NavBar extends PureComponent<Props, State> {

  goBack = (): void => {
    if(!this.props.showBackButton) {
      return;
    }
    this.props.onBack()
  }

  render() {
    const {
      title,
      showBackButton,
    } = this.props;
    return (
<View style={styles.container}>
  {showBackButton &&
  <TouchableOpacity
    onPress={this.goBack}
    style={styles.backButton}
  >
    <Icon
      name="angle-left"
      size={25}
      color={Style.whiteColor}
    />
  </TouchableOpacity>
  }
  {!showBackButton &&
  <TouchableOpacity
    style={styles.dummyButton}
  />
  }

  <Text style={styles.text}>
    {title}
  </Text>

  <TouchableOpacity
    style={styles.dummyButton}
  />
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.purpleColor,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row',
  },
  text: {
    fontSize: Style.fontSize,
    color: Style.whiteColor,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  backButton: {
    width: 20,
    opacity: 1,
  },
  dummyButton: {
    opacity: 1,
    width: 20,
  }
});
