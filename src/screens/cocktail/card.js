// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';

import * as Style from '../../stylesheet';

import {
  type TCocktail,
} from '../../api/cocktails';

type Props = TCocktail;

type State = void;

export default class Card extends PureComponent<Props, State> {

  render() {
    const {
      image,
      ingredients,
      measures,
      instructions,
    } = this.props;
    return (
<View style={styles.container}>
  <Image
    source={{ uri: image }}
    style={styles.image}
  />

  <View style={styles.ingredientsContainer}>
    {ingredients.map((ingredient, i) => (
    <View
      key={i.toString()}
      style={styles.ingredientContainer}
    >
      <Text style={styles.text}>
        {ingredient} - {measures[i] || ""}
      </Text>
    </View>
    ))}
  </View>

  <View style={styles.howtoContainer}>
    <Text style={[styles.text, styles.howToText]}>
      How to prepare
    </Text>
    <Text style={styles.text}>
      {instructions}
    </Text>
  </View>
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.whiteColor,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: Style.cocktails.cardPadding,
    marginHorizontal: Style.cocktails.cardMargin,
    marginVertical: 10,
    borderRadius: Style.cocktails.borderRadius,
    elevation: Style.cocktails.elevation,
  },
  image: {
    width: Dimensions.get('window').width - Style.cocktails.cardPadding * 2 - Style.cocktails.cardMargin * 2,
    height: 250,
    alignSelf: 'center',
    borderRadius: Style.cocktails.borderRadius,
  },
  ingredientsContainer: {
    marginVertical: 10,
  },
  ingredientContainer: {

  },
  text: {
    color: Style.blackColor,
    fontSize: Style.fontSize,
  },
  howToText: {
    marginBottom: 5,
  },
});
