import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_COCKTAIL_DETAIL } from './constants';
import { cocktailDetailLoaded, cocktailDetailError } from './actions';

import request from 'utils/request';

export function* getCocktailDetail(action) {
  const requestURL = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${action.id}`;

  try {
    const cocktailDetail = yield call(request, requestURL);

    yield put(cocktailDetailLoaded(cocktailDetail));
  } catch (err) {
    yield put(cocktailDetailError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerGetCocktailDetail() {
  yield takeLatest(LOAD_COCKTAIL_DETAIL, getCocktailDetail);
}
