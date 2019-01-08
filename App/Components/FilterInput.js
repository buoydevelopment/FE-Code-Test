import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
} from 'react-native'
import styles from './Styles/FilterInputStyle'

export default class FilterInput extends Component {


  static propTypes = {
    filterCocktails: PropTypes.func,
    searchText: PropTypes.string,
  };


  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{color:'black'}}
          placeholder="Search Cocktails by name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          autoCapitalize="characters"
          secureTextEntry={false}
          onChangeText={(s) => this.props.filterCocktails(s)}
          value={this.props.searchText}
        />
      </View>
    )
  }
}
