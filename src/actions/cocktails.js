import CocktailService from '../provider/services/CocktailService';
import { SET_COCKTAILS, SET_COCKTAIL_DETAIL } from './types';

export function fetchCocktails(callbackSuccess, callbackError) {
  return dispatch => {
    CocktailService.getCocktails()
      .then(response => {
        dispatch({
          type: SET_COCKTAILS,
          payload: response,
        });
        callbackSuccess(response);
      })
      .catch(error => {
        callbackError(error);
      });
  };
}

export function fetchCocktailById(idDrink, callbackSuccess, callbackError) {
  return dispatch => {
    CocktailService.getCocktailsById(idDrink)
      .then(response => {
        dispatch({
          type: SET_COCKTAIL_DETAIL,
          payload: response,
        });
        callbackSuccess(response);
      })
      .catch(error => {
        callbackError(error);
      });
  };
}
