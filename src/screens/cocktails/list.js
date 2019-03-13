// @flow

import React, { PureComponent } from 'react';
import {
  FlatList,
  Dimensions,
  type VirtualizedList,
} from 'react-native';

import type { Props as VirtualizedListType } from 'VirtualizedList';

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

  flatList: VirtualizedListType | null = null;

  onRefFlatList = (elem: VirtualizedListType | null): void => {
    this.flatList = elem;
  }

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

  scrollToTop() {
    if(this.flatList != null) {
      this.flatList.scrollToOffset({ x: 0, y: 0, animated: true });
    }
  }

  render() {
    const {
      items,
    } = this.props;
    return (
  <FlatList
    ref={this.onRefFlatList}
    data={items}
    keyExtractor={this.keyExtractor}
    renderItem={this.renderItem}
    getItemLayout={this.getItemLayout}
    initialNumToRender={List.initialNumToRender}
  />
    );
  }

}
