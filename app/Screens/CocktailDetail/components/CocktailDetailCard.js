import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CocktailDetailCardStyles';

const CocktailDetailCard = ({ cocktail, error }) => {
  if (!error && cocktail !== null) {
    const ingredients = cocktail.ingredients.map(ingredient => {
      return (
        <Text key={ingredient.ingredientName}>{`${ingredient.ingredientMeasure} - ${
          ingredient.ingredientName
        }`}</Text>
      );
    });
    return (
      <View>
        <Text style={styles.cocktailName}>{cocktail.name}</Text>
        <View style={styles.cardContainer}>
          <Image source={{ uri: cocktail.image }} resizeMethod="resize" style={styles.image} />
          {ingredients}
          <Text style={styles.instructionTitle}>* How to Prepare</Text>
          <Text>{cocktail.instructions}</Text>
        </View>
      </View>
    );
  }
  return <Text>Element could not be loaded.</Text>;
};

CocktailDetailCard.propTypes = {
  cocktail: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    instructions: PropTypes.string,
    ingredients: PropTypes.array,
  }),
  error: PropTypes.bool.isRequired,
};

CocktailDetailCard.defaultProps = {
  cocktail: null,
};

export default CocktailDetailCard;
