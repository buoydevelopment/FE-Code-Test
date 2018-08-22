import {
  LOAD_COCKTAIL_LIST,
  LOAD_COCKTAIL_LIST_SUCCESS,
  LOAD_COCKTAIL_LIST_ERROR,
} from './constants';

/**
 * Load the cocktails, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_COCKTAIL_LIST
 */
export function loadCocktailList() {
  return {
    type: LOAD_COCKTAIL_LIST,
  };
}

/**
 * Dispatched when the cocktails are loaded by the request saga
 *
 * @param  {array} cocktailList The list of cocktails
 *
 * @return {object}      An action object with a type of LOAD_COCKTAIL_LIST_SUCCESS passing the cocktails
 */
export function cocktailListLoaded(cocktailList) {
  return {
    type: LOAD_COCKTAIL_LIST_SUCCESS,
    cocktailList,
  };
}

/**
 * Dispatched when loading the cocktails fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_COCKTAIL_LIST_ERROR passing the error
 */
export function cocktailListError(error) {
  return {
    type: LOAD_COCKTAIL_LIST_ERROR,
    error,
  };
}
