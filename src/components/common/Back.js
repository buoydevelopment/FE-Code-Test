import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';

const Back = () => {
  return (
    <TouchableHighlight
      onPress={() => Actions.pop()}>
      <Icon name='arrow-left' size={25} color='#c8f3f7' style={styles.backIconStyles} />
    </TouchableHighlight>
  )
}

const styles = {
  backIconStyles: {
    margin: 10
  }
}

export default Back;
