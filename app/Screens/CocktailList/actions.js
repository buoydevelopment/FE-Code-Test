import {
  LOAD_COCKTAIL_LIST,
  LOAD_COCKTAIL_LIST_SUCCESS,
  LOAD_COCKTAIL_LIST_ERROR,
  FILTER_COCKTAIL_LIST,
} from './constants';

export function loadCocktailList() {
  return {
    type: LOAD_COCKTAIL_LIST,
  };
}

export function loadCocktailListSuccess(cocktailList) {
  return {
    type: LOAD_COCKTAIL_LIST_SUCCESS,
    cocktailList,
  };
}

export function loadCocktailListError() {
  return {
    type: LOAD_COCKTAIL_LIST_ERROR,
  };
}

export function filterCocktailList(cocktailList) {
  return {
    type: FILTER_COCKTAIL_LIST,
    cocktailList,
  };
}
