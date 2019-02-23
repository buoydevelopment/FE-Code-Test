import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
};

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Boiler Plate 2019</Text>
      </View>
    );
  }
}

export default Welcome;
