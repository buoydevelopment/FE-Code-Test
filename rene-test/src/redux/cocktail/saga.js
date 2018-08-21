import { all, takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const getDrinks = async () => {
  try {
    return await axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
  } catch (error) {
    console.error(error);
  }
};

const getSingleDrink = async (id) => {
  try {
    return await axios.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id);
  } catch (error) {
    console.error(error);
  }
};

export function* listRequest() {
  yield takeEvery('COCKTAIL_LIST_REQUEST', function* () {
    const cocktailData = yield getDrinks();
    if (cocktailData) {
      console.log('Successfully fetched cocktail list.');
      yield put({
        type: actions.COCKTAIL_LIST_SUCCESS,
        payload: cocktailData.data.drinks
      });
    } else {
      console.log('Filed to fetch cocktail list.');
      yield put({
        type: actions.COCKTAIL_LIST_ERROR,
      });
    }
  });
}

export function* detailsRequest() {
  yield takeEvery('COCKTAIL_DETAILS_REQUEST', function* ({ payload }) {
    const cocktailSingle = yield getSingleDrink(payload);
    if (cocktailSingle) {
      const drinks = cocktailSingle.data.drinks || [];
      console.log('Successfully fetched cocktail details. id:', payload);
      yield put({
        type: actions.COCKTAIL_DETAILS_SUCCESS,
        payload: drinks[0]
      });
    } else {
      console.log('Filed to fetch cocktail details.');
      yield put({
        type: actions.COCKTAIL_LIST_ERROR,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest),
    fork(detailsRequest),
  ]);
}