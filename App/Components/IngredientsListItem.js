import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/IngredientsListItemStyle'

export default class IngredientsListItem extends Component {
  // Prop type warnings
   static propTypes = {
     name: PropTypes.string,
     measure: PropTypes.string,
  };


  render () {
    const { name, measure } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>- {name}</Text>
        <Text style={styles.text}>{measure}</Text>
      </View>
    )
  }
}
