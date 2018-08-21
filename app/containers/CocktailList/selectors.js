/**
 * CocktailsList selectors
 */

import { createSelector } from 'reselect';

const selectCocktailList = (state) => state.get('cocktailList');

const makeSelectCocktailList = () => createSelector(
  selectCocktailList,
  (cocktailListState) => cocktailListState.get('cocktailList')
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
  makeSelectCocktailList,
  makeSelectLoading,
  makeSelectError,
};
