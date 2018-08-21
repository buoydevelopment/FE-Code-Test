import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_COCKTAIL_LIST } from './constants';
import { cocktailListLoaded, cocktailListError } from './actions';

import request from 'utils/request';

export function* getCocktailList() {
  const requestURL = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`;

  try {
    const cocktailList = yield call(request, requestURL);

    yield put(cocktailListLoaded(cocktailList));
  } catch (err) {
    yield put(cocktailListError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerGetCocktailList() {
  yield takeLatest(LOAD_COCKTAIL_LIST, getCocktailList);
}
