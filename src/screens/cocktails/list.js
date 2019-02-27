// @flow

import React, { PureComponent } from 'react';
import {
  FlatList,
  Dimensions,
} from 'react-native';

import * as Style from '../../stylesheet';

import Row from './row';

import {
  type TCocktail,
  type TCocktails,
} from '../../api/cocktails';

type Props = {
  items: TCocktails,
};

type State = void;

export default class List extends PureComponent<Props, State> {

  static initialNumToRender = Math.floor(Dimensions.get('window').height / Style.cocktails.cardWrapperHeight) + 1;

  keyExtractor = ({ id }: TCocktail) => {
    return id;
  }

  renderItem = ({ item }: { item: TCocktail, index: number }) => {
    return (
  <Row
    item={item}
  />
    );
  }

  getItemLayout = (data: any, index: number) => {
    return {
      length: Style.cocktails.cardHeight,
      offset: Style.cocktails.cardHeight * index,
      index,
    };
  }

  render() {
    const {
      items,
    } = this.props;
    return (
  <FlatList
    data={items}
    keyExtractor={this.keyExtractor}
    renderItem={this.renderItem}
    getItemLayout={this.getItemLayout}
    initialNumToRender={List.initialNumToRender}
  />
    );
  }

}
