import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import cocktailListActions from '../Redux/CocktailListRedux';

export function * getCocktailList (api) {

  // make the call to the api
  const response = yield call(api.getCocktailList);

  if (response.ok) {
    const cocktailList = path(['data', 'drinks'], response);
    yield put(cocktailListActions.cocktailListSuccess(cocktailList));
  } else {
    yield put(cocktailListActions.cocktailListError());
  }
}
