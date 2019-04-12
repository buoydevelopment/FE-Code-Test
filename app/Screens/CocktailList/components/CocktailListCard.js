import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CocktailListCardStyles';

const CocktailListCard = ({ item, onCocktailPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onCocktailPress(item.item.idDrink)}>
      <View style={styles.cardContainer}>
        <View style={styles.cocktailNameContainer}>
          <Text style={styles.cocktailName}>{item.item.strDrink}</Text>
        </View>
        <View style={styles.cocktailImageContainer}>
          <Image
            style={styles.cocktailImage}
            source={{ uri: item.item.strDrinkThumb }}
            resizeMethod="resize"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

CocktailListCard.propTypes = {
  item: PropTypes.shape({
    item: PropTypes.shape({
      strDrink: PropTypes.string,
      idDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  }).isRequired,
  onCocktailPress: PropTypes.func.isRequired,
};

export default CocktailListCard;
