import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
};

class Welcome extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

export default Welcome;
