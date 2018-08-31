import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_FAILURE,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_FAILURE,
  FETCH_COCKTAILS_SUCCESS
} from 'redux/state/cocktails/constants';
import ApiClient from 'service/api-client';

export const fetchCocktails = () => (dispatch) => {
  dispatch({ type: FETCH_COCKTAILS });
};

export const fetchCocktailsSuccess = response => (dispatch) => {
  dispatch({ type: FETCH_COCKTAILS_SUCCESS, response });
};

export const fetchCocktailsError = error => (dispatch) => {
  dispatch({
    type: FETCH_COCKTAILS_FAILURE,
    error: 'Error fetching coctails'
  });
};

export const fetchCocktail = () => (dispatch) => {
  dispatch({ type: FETCH_COCKTAIL });
};

export const fetchCocktailSuccess = response => (dispatch) => {
  dispatch({ type: FETCH_COCKTAIL_SUCCESS, response });
};

export const fetchCocktailError = error => (dispatch) => {
  dispatch({
    type: FETCH_COCKTAIL_FAILURE,
    error: 'Error fetching coctails'
  });
};

export const getCocktails = () => (dispatch, getState) => {
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

export const getCocktail = id => (dispatch) => {
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
