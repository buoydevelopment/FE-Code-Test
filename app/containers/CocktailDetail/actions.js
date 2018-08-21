import {
  LOAD_COCKTAIL_DETAIL,
  LOAD_COCKTAIL_DETAIL_SUCCESS,
  LOAD_COCKTAIL_DETAIL_ERROR,
} from './constants';

/**
 * Load the cocktail, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_COCKTAIL_DETAIL
 */
export function loadCocktailDetail(id) {
  return {
    type: LOAD_COCKTAIL_DETAIL,
    id,
  };
}

/**
 * Dispatched when the cocktail are loaded by the request saga
 *
 * @param  {array} cocktail
 *
 * @return {object}      An action object with a type of LOAD_COCKTAIL_DETAIL_SUCCESS passing the cocktails
 */
export function cocktailDetailLoaded(cocktail) {
  return {
    type: LOAD_COCKTAIL_DETAIL_SUCCESS,
    cocktail,
  };
}

/**
 * Dispatched when loading the cocktail fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_COCKTAIL_DETAIL_ERROR passing the error
 */
export function cocktailDetailError(error) {
  return {
    type: LOAD_COCKTAIL_DETAIL_ERROR,
    error,
  };
}
