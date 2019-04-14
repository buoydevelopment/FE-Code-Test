import { createSelector } from "reselect";

const getDrinks = state => state.drinksReducer.drinks;
const getFilter = state => state.drinksReducer.filter;
export const getDrinkSelected = state => state.drinksReducer.drinkSelected;
export const getFetching = state => state.drinksReducer.fetching;

export const getFilteredDrinks = createSelector(
  [getDrinks, getFilter],
  (drinks, filter) =>
    drinks.filter(drink =>
      drink.strDrink.toUpperCase().startsWith(filter.toUpperCase())
    )
);
