import {
  LOAD_COCKTAIL,
  LOAD_COCKTAIL_SUCCESS,
  LOAD_COCKTAIL_ERROR,
} from './constants';

/**
 * Load the cocktail, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_COCKTAIL
 */
export function loadCocktail(id) {
  return {
    type: LOAD_COCKTAIL,
    id,
  };
}

/**
 * Dispatched when the cocktail are loaded by the request saga
 *
 * @param  {array} cocktail
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_COCKTAIL_SUCCESS passing the cocktails
 */
export function cocktailLoaded(cocktail) {
  return {
    type: LOAD_COCKTAIL_SUCCESS,
    cocktail,
  };
}

/**
 * Dispatched when loading the cocktail fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_COCKTAIL_ERROR passing the error
 */
export function cocktailError(error) {
  return {
    type: LOAD_COCKTAIL_ERROR,
    error,
  };
}
