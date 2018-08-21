import { createSelector } from 'reselect';

const selectCocktailDetail = (state) => state.get('cocktailDetail');

const makeSelectCocktail = () => createSelector(
  selectCocktailDetail,
  (cocktailDetailState) => cocktailDetailState.get('cocktail')
);

const makeSelectLoading = () => createSelector(
  selectCocktailDetail,
  (cocktailDetailState) => cocktailDetailState.get('loading')
);

const makeSelectError = () => createSelector(
  selectCocktailDetail,
  (cocktailDetailState) => cocktailDetailState.get('error')
);

export {
  makeSelectCocktail,
  makeSelectLoading,
  makeSelectError,
};
