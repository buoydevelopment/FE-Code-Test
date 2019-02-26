// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Navigation from '../../navigation';
import { bindComponentToNavigation } from '../../navigation/helpers';

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
    title="Random drinks 0.1"
  />

</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Style.blueColor,
  },
});

export default bindComponentToNavigation(Index);
