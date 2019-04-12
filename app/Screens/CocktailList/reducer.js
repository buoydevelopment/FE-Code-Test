import {
  LOAD_COCKTAIL_LIST,
  LOAD_COCKTAIL_LIST_ERROR,
  LOAD_COCKTAIL_LIST_SUCCESS,
  FILTER_COCKTAIL_LIST,
} from './constants';

export const initialState = {
  cocktailList: null,
  searchList: [],
  loadingCocktailList: false,
  loadingCocktailListError: false,
};

export default function cocktailListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COCKTAIL_LIST:
      return Object.assign({}, state, {
        loadingCocktailList: true,
        loadingCocktailListError: false,
      });
    case LOAD_COCKTAIL_LIST_SUCCESS:
      return Object.assign({}, state, {
        cocktailList: action.cocktailList,
        searchList: action.cocktailList,
        loadingCocktailList: false,
        loadingCocktailListError: false,
      });
    case LOAD_COCKTAIL_LIST_ERROR:
      return Object.assign({}, state, {
        loadingCocktailList: false,
        loadingCocktailListError: true,
      });
    case FILTER_COCKTAIL_LIST:
      return Object.assign({}, state, { searchList: action.cocktailList });
    default:
      return state;
  }
}
