import { call, put } from 'redux-saga/effects';
import { API_BASE_URL, API_COCKTAIL_LIST } from '../../utils/constants';
import { loadCocktailListSuccess, loadCocktailListError } from './actions';
import request from '../../utils/api';

export default function* loadCocktailListInterception() {
  const url = `${API_BASE_URL}${API_COCKTAIL_LIST}`;
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
    },
  };
  try {
    const response = yield call(request, url, fetchOptions);
    const data = response.response.drinks;
    yield put(loadCocktailListSuccess(data));
  } catch (error) {
    yield put(loadCocktailListError());
  }
}
