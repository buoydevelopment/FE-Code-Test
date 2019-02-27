import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Image from 'react-native-fast-image'

import * as Style from '../../stylesheet';

import TouchableOpacity from '../../components/touchable.opacity';

import {
  type TCocktail,
} from '../../api/cocktails';

type Props = {
  item: TCocktail,
};

type State = void;

export default class Row extends PureComponent<Props, State> {

  render() {
    const {
      item: {
        image,
        brief,
      },
    } = this.props;
    return (
<View style={styles.wrapper}>
  <TouchableOpacity
    style={styles.container}
  >
    <View style={styles.descContainer}>
      <Text
        ellipsizeMode='tail'
        numberOfLines={1}
        style={styles.briefText}
      >
        {brief}
      </Text>
    </View>
    <Image
      source={{ uri: image }}
      style={styles.image}
    />
  </TouchableOpacity>
</View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    height: Style.cocktails.cardWrapperHeight,
  },
  container: {
    backgroundColor: Style.whiteColor,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Style.cocktails.borderRadius,
    elevation: 2,
    width: Style.cocktails.cardWidth,
    height: Style.cocktails.cardHeight,
  },
  descContainer: {
    flex: 1,
  },
  briefText: {
    fontSize: Style.fontSizeBig,
    color: Style.blackColor,
  },
  image: {
    width: Style.cocktails.cardImageWidth,
    height: Style.cocktails.cardImageHeight,
    borderRadius: Style.cocktails.borderRadius,
  },
});
