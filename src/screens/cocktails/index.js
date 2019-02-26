// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Navigator from '../../navigator';
import { bindComponentToNavigator } from '../../navigator/helpers';

import * as Style from '../../stylesheet';

import NavBar from '../../components/nav.bar';

type Props = {};

type State = {
  stack: Array<string>
};

export class Index extends PureComponent<Props, State> {

  render() {
    return (
<View style={styles.container}>
  <NavBar
  />

</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Style.backgroundColor,
  },
});

export default bindComponentToNavigator(Index);
