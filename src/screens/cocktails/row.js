// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Image from 'react-native-fast-image';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Style from '../../stylesheet';

import TouchableOpacity from '../../components/touchable.opacity';

import {
  type TCocktail,
} from '../../api/cocktails';

import {
  push,
  type TDispatchers as TDispatchersNavigation,
} from '../../store/actions/navigation';

import {
  toggleFavorite as toggleCocktailFavorite,
  type TDispatchers as TDispatchersCocktails,
} from '../../store/actions/cocktails';

type OwnProps = {
  item: TCocktail,
  isFavorite: bool,
};

type DispatchProps = {
  push: $PropertyType<TDispatchersNavigation, 'push'>,
  toggleCocktailFavorite: $PropertyType<TDispatchersCocktails, 'toggleFavorite'>, 
};

type Props = OwnProps & DispatchProps;

type State = void;

export class Row extends PureComponent<Props, State> {

  addToFavorite = (): void => {
    const { id } = this.props.item;
    this.props.toggleCocktailFavorite({ id });
  }

  gotoCocktail = (): void => {
    const {
      item: {
        id,
        brief,
      },
    } = this.props;
    this.props.push(
      'Buoy.Cocktail',
      {
        cocktailId: id,
        cocktailBrief: brief,
      }
    );
  }

  render() {
    const {
      item: {
        image,
        brief,
      },
      isFavorite,
    } = this.props;
    return (
<View style={styles.wrapper}>
  <TouchableOpacity
    style={styles.container}
    onPress={this.gotoCocktail}
  >
    <View>
      <View style={styles.descContainer}>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={styles.briefText}
        >
          {brief}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={this.addToFavorite}
      >
        <Icon
          name={isFavorite ? "heart" : "heart-o"}
          size={Style.fontSize}
          color={Style.blueColor}
        />
      </TouchableOpacity>
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
    paddingHorizontal: Style.cocktails.cardPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Style.cocktails.borderRadius,
    elevation: Style.cocktails.elevation,
    width: Style.cocktails.cardWidth,
    height: Style.cocktails.cardHeight,
  },
  descContainer: {
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
  favoriteButton: {
    marginTop: 10,
  },
});

import {
  bindActionCreators,
  type Dispatch
} from 'redux';

import {
  connect,
} from 'react-redux';

import {
  type TStore
} from '../../store/reducers';

export const mapStateToProps = (
  { cocktails: { itemsAsFavorite } }: TStore,
  { item }: OwnProps,
): OwnProps => ({
  item,
  isFavorite: item.id in itemsAsFavorite ? itemsAsFavorite[item.id] : false,
});

export const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => bindActionCreators({
  push,
  toggleCocktailFavorite,
}, dispatch);

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);

export default connectedComponent;
