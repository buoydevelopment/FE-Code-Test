import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class DrinkIngredients extends Component {

  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => (
    <Text>{item.amount} - {item.ingredientName}</Text>
  );

  render() {
    return (
      <View>
        <FlatList
          ref="drinkIngredientsList"
          data={this.props.drinkElements}
          extraData={this.state}
          renderItem={this._renderItem}       
          keyExtractor={ item => parseInt(item.id)}
        ></FlatList>
      </View>
    )
  };
}