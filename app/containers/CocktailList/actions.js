import {
  LOAD_COCKTAILS,
  LOAD_COCKTAILS_SUCCESS,
  LOAD_COCKTAILS_ERROR,
} from './constants';

/**
 * Load the cocktails, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_COCKTAILS
 */
export function loadCocktails() {
  return {
    type: LOAD_COCKTAILS,
  };
}

/**
 * Dispatched when the cocktails are loaded by the request saga
 *
 * @param  {array} cocktails The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_COCKTAILS_SUCCESS passing the cocktails
 */
export function cocktailsLoaded(cocktails) {
  return {
    type: LOAD_COCKTAILS_SUCCESS,
    cocktails,
  };
}

/**
 * Dispatched when loading the cocktails fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_COCKTAILS_ERROR passing the error
 */
export function cocktailsError(error) {
  return {
    type: LOAD_COCKTAILS_ERROR,
    error,
  };
}
