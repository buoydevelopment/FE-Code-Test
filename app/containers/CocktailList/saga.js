import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_COCKTAILS } from './constants';
import { cocktailsLoaded, cocktailsError } from './actions';

import request from 'utils/request';

export function* getCocktails() {
  const requestURL = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`;

  try {
    const cocktails = yield call(request, requestURL);
    yield put(cocktailsLoaded(cocktails));
  } catch (err) {
    yield put(cocktailsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerGetCocktails() {
  yield takeLatest(LOAD_COCKTAILS, getCocktails);
}
