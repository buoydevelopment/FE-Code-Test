// @flow

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

import {
  push,
  type TDispatchers as TDispatchersNavigation,
} from '../../store/actions/navigation';

type OwnProps = {
  item: TCocktail,
};

type DispatchProps = {
  push: $PropertyType<TDispatchersNavigation, 'push'>,
};

type Props = OwnProps & DispatchProps;

type State = void;

export class Row extends PureComponent<Props, State> {

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
    } = this.props;
    return (
<View style={styles.wrapper}>
  <TouchableOpacity
    style={styles.container}
    onPress={this.gotoCocktail}
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

export const mapStateToProps = null;

export const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => bindActionCreators({
  push,
}, dispatch);

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);

export default connectedComponent;
