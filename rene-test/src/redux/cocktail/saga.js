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

export function* listRequest() {
  yield takeEvery('COCKTAIL_LIST_REQUEST', function* () {
    const cocktailData = yield getDrinks();
    if (cocktailData) {
      console.log('Successful fetched cocktail list');
      yield put({
        type: actions.COCKTAIL_LIST_SUCCESS,
        payload: cocktailData.data.drinks
      });
    } else {
      console.log('Filed to fetch cocktail list');
      yield put({
        type: actions.COCKTAIL_LIST_ERROR,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest)
  ]);
}