import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Drink from './Drink';

class DrinksList extends Component {

  render() {
    return (
      <FlatList
        data={this.props.cocktails}
        renderItem={({ item }) => <Drink drink={item} />}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

export default DrinksList;