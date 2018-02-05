import axios from 'axios';
import { CHANGE_APP_PROPS, LOAD_DETAILS, GET_COCKTAILS, GET_COCKTAIL_DETAILS, FILTER_COCKTAILS } from './types';

const GET_COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
const GET_COCKTAIL_DETAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const getCocktails = () => {
  return (dispatch) => {
    dispatch({ type: CHANGE_APP_PROPS, payload: true })
    axios.get(GET_COCKTAILS_URL).then(response => {
      let drinks = response.data.drinks
      dispatch({ type: GET_COCKTAILS, payload: drinks })
      dispatch({ type: CHANGE_APP_PROPS, payload: false })
    }).catch((err) => {
      dispatch({ type: CHANGE_APP_PROPS, payload: false })
      console.log('error getting cocktails list', err)
    })
  };
};
export const getCocktailDetails = (cocktailId) => {
  return (dispatch) => {
    dispatch({ type: LOAD_DETAILS, payload: true })
    axios.get(GET_COCKTAIL_DETAILS_URL + cocktailId).
      then(response => {
        let drinks = response.data.drinks[0]
        dispatch({ type: GET_COCKTAIL_DETAILS, payload: drinks })
        dispatch({ type: LOAD_DETAILS, payload: false })
      }).catch((err) => {
        dispatch({ type: LOAD_DETAILS, payload: false })
        console.log('error getting cocktail details', err)
      })
  };
};
export const filterDrinks = (string) => {
  return (dispatch) => {
    dispatch({ type: FILTER_COCKTAILS, payload: string })
  };
};