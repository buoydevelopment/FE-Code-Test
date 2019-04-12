import {
  LOAD_COCKTAIL_DETAIL,
  LOAD_COCKTAIL_DETAIL_SUCCESS,
  LOAD_COCKTAIL_DETAIL_ERROR,
} from './constants';

export function loadCocktailDetail(cocktailId) {
  return {
    type: LOAD_COCKTAIL_DETAIL,
    cocktailId,
  };
}

export function loadCocktailDetailSuccess(name, image, instructions, ingredients) {
  return {
    type: LOAD_COCKTAIL_DETAIL_SUCCESS,
    name,
    image,
    instructions,
    ingredients,
  };
}

export function loadCocktailDetailError() {
  return {
    type: LOAD_COCKTAIL_DETAIL_ERROR,
  };
}
