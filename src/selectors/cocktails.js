import { createSelector } from 'reselect';

const cocktailsSelector = state => state.cocktails.cocktails;

const getCocktailsByWord = state => {
  console.log('state.cocktails.filter', state.cocktails.filter);
  return createSelector(
    [cocktailsSelector],
    cocktails => cocktails.filter(cocktail => cocktail.strDrink.startsWith(state.cocktails.filter))
  )(state);
};

export default getCocktailsByWord;
