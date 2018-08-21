import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_COCKTAIL } from './constants';
import { cocktailLoaded, cocktailError } from './actions';

import request from 'utils/request';

export function* getCocktailDetail(action) {
  const requestURL = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${action.id}`;

  try {
    const cocktailDetail = yield call(request, requestURL);
    yield put(cocktailLoaded(cocktailDetail));
  } catch (err) {
    yield put(cocktailError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerGetCocktailDetail() {
  yield takeLatest(LOAD_COCKTAIL, getCocktailDetail);
}
