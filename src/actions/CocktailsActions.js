import axios from 'axios';
import { CHANGE_APP_STATE, GET_COCKTAILS, GET_COCKTAIL_DETAILS, FILTER_COCKTAILS } from './types';

const GET_COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
const GET_COCKTAIL_DETAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const getCocktails = () => {
  return (dispatch) => {
    dispatch({ type: CHANGE_APP_STATE, payload: true });
    axios.get(GET_COCKTAILS_URL).then(response => {
      const cocktails = response.data.drinks;
      dispatch({ type: GET_COCKTAILS, payload: cocktails });
      dispatch({ type: CHANGE_APP_STATE, payload: false });
    }).catch((err) => {
      dispatch({ type: CHANGE_APP_STATE, payload: false });
      console.log('error getting cocktails list from server.', err)
    })
  };
};

export const getCocktailDetails = (cocktailId) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_APP_STATE, payload: true });
    axios.get(GET_COCKTAIL_DETAILS_URL + cocktailId).then(response => {
        const cocktail = response.data.drinks[0];
        dispatch({ type: GET_COCKTAIL_DETAILS, payload: cocktail });
        dispatch({ type: CHANGE_APP_STATE, payload: false });
      }).catch((err) => {
        dispatch({ type: CHANGE_APP_STATE, payload: false });
        console.log('error getting cocktail details from server.', err)
      })
  };
};

export const filterCocktails = (string) => {
  return (dispatch) => {
    dispatch({ type: FILTER_COCKTAILS, payload: string });
  };
};