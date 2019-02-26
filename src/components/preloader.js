// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import * as Style from '../stylesheet';

type Props = {};

type State = void;

export default class Preloader extends PureComponent<Props, State> {

  render() {
    return (
<View style={styles.container}>
  <ActivityIndicator
    size="large"
    color={Style.purpleColor}
  />
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,.7)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});