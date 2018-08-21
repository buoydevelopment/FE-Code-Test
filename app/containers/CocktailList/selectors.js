/**
 * CocktailsList selectors
 */

import { createSelector } from 'reselect';

const selectCocktailList = (state) => state.get('cocktailList');

const makeSelectCocktails = () => createSelector(
  selectCocktailList,
  (cocktailListState) => cocktailListState.get('cocktails')
);

const makeSelectLoading = () => createSelector(
  selectCocktailList,
  (cocktailListState) => cocktailListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectCocktailList,
  (cocktailListState) => cocktailListState.get('error')
);

export {
  makeSelectCocktails,
  makeSelectLoading,
  makeSelectError,
};
