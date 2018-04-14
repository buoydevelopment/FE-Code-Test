import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.ingredients}
          renderItem={({item}) => <Text>{item.measure} - {item.ingredient}</Text>}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
    )
  }
}
