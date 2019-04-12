import { call, put } from 'redux-saga/effects';
import request from '../../utils/api';
import { loadCocktailDetailSuccess, loadCocktailDetailError } from './actions';
import { API_BASE_URL, API_COCKTAIL_DETAIL } from '../../utils/constants';
import ingredientsConstructor from '../../utils/ingredientsConstructor';

export default function* loadCocktailDetailInterception(action) {
  const url = `${API_BASE_URL}${API_COCKTAIL_DETAIL}${action.cocktailId}`;
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
    },
  };
  try {
    const response = yield call(request, url, fetchOptions);
    const cocktailDetails = response.response.drinks[0];
    const name = cocktailDetails.strDrink;
    const image = cocktailDetails.strDrinkThumb;
    const instructions = cocktailDetails.strInstructions;
    const ingredients = ingredientsConstructor(cocktailDetails);
    yield put(loadCocktailDetailSuccess(name, image, instructions, ingredients));
  } catch (error) {
    yield put(loadCocktailDetailError());
  }
}
