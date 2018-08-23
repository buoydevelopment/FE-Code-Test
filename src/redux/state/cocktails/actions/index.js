import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_FAILURE,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_FAILURE,
  FETCH_COCKTAILS_SUCCESS
} from 'redux/state/cocktails/constants';
import ApiClient from 'service/api-client';

export const fetchCocktails = function() {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAILS
    });
  };
};

export const fetchCocktailsSuccess = function(response) {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAILS_SUCCESS,
      response
    });
  };
};

export const fetchCocktailsError = function(error) {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAILS_FAILURE,
      error: 'Error fetching coctails'
    });
  };
};

export const fetchCocktail = function() {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAIL
    });
  };
};

export const fetchCocktailSuccess = function(response) {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAIL_SUCCESS,
      response
    });
  };
};

export const fetchCocktailError = function(error) {
  return (dispatch) => {
    dispatch({
      type: FETCH_COCKTAIL_FAILURE,
      error: 'Error fetching coctails'
    });
  };
};


export const getCocktails = function() {
  return (dispatch, getState) => {
    dispatch(fetchCocktails());
    const url = '/api/json/v1/1/filter.php?g=Cocktail_glass';
    ApiClient.getUrl(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchCocktailsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCocktailsError(error));
      });
  };
};

export const getCocktail = function(id) {
  return (dispatch, getState) => {
    dispatch(fetchCocktails());
    const url = `/api/json/v1/1/lookup.php?i=${id}`;
    ApiClient.getUrl(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchCocktailSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCocktailError(error));
      });
  };
};
