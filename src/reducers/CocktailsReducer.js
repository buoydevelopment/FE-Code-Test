import { GET_COCKTAILS, GET_COCKTAIL_DETAILS, FILTER_COCKTAILS } from '../actions/types';

const INITIAL_STATE = {
  allCocktails: [],
  cocktailsToShow: [],
  cocktailDetails: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      return { ...state, cocktailsToShow: action.payload, allCocktails: action.payload };
    case FILTER_COCKTAILS:
      const filteredCocktails = state.allCocktails.filter((cocktail) => {
        const lowerCaseCocktailName = cocktail.strDrink.toLowerCase();
        const lowerCaseParam = action.payload.toLowerCase();
        return lowerCaseCocktailName.includes(lowerCaseParam);
      });
      return { ...state, cocktailsToShow: filteredCocktails };
    case GET_COCKTAIL_DETAILS:
      return { ...state, cocktailDetails: action.payload };
    default:
      return state;
  }
};
