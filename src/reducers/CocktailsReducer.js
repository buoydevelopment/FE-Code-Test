import { GET_COCKTAILS, GET_COCKTAIL_DETAILS, FILTER_COCKTAILS } from '../actions/types';

const INITIAL_STATE = {
  cocktails: [],
  cocktailsCopy: [],
  cocktailDetails: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      return { ...state, cocktails: action.payload, cocktailsCopy: action.payload }
    case GET_COCKTAIL_DETAILS:
      return { ...state, cocktailDetails: action.payload }
    case FILTER_COCKTAILS:
      let drinksCopy = state.cocktailsCopy.slice();
      let filteredDrinks = drinksCopy.filter((drink) => {
        let lowerCaseDrink = drink.strDrink.toLowerCase();
        let lowerCaseSearchParam = action.payload.toLowerCase();
        return lowerCaseDrink.includes(lowerCaseSearchParam);
      });
      return { ...state, cocktails: filteredDrinks }
    default:
      return state;
  }
};
