import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import Typography from '../../common/typography/Typography';
import Spacing from '../../common/spacing/Spacing';
import PlaceHolderImage from '../../common/placeholder-image/PlaceHolderImage';
import Cocktail from '../../../entities/Cocktail';

const ListingBox = ({ item, onDrinkPress }) => (
  <TouchableOpacity
    style={[styles.cocktail]}
    activeOpacity={0.9}
    onPress={() => onDrinkPress(item)}
  >
    <View style={styles.info}>
      <Typography variant="bodyTitleRegular" color="black" style={styles.textTitle}>
        {item.strDrink}
      </Typography>
      <Spacing size="thin" />
    </View>
    <View style={styles.cocktailPhoto}>
      <PlaceHolderImage style={styles.image} source={{ uri: item.strDrinkThumb }} />
    </View>
  </TouchableOpacity>
);

ListingBox.propTypes = {
  item: PropTypes.instanceOf(Cocktail).isRequired,
  onDrinkPress: PropTypes.func,
};

ListingBox.defaultProps = {
  onDrinkPress: () => {},
};

export default ListingBox;
