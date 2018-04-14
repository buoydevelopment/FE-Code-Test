import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
};

const styles = {
  spinnerStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Spinner;
