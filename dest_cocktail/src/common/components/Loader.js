import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

class Loader extends React.Component {
  render() {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'    
  }
});