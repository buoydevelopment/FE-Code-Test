import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class ListView extends Component {

  render() {
    return (
      <FlatList
        data={this.props.cocktails}
        renderItem={({ item }) => <ListItem cocktail={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default ListView;
