import { put, call, select, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/actionTypes';
import { raiseError,
  requestSuccess,
  getDetailsAsync } from '../actions';
import { getCocktails } from '../selector';

function* getDetails(action) {
  try {
    const cocktails = yield select(getCocktails);
    const shouldCall = cocktails.filter((c) => {
      return c.idDrink === action.payload && Object.keys(c).length > 3
    });
    if (!shouldCall.length) {
      const data = yield call(getDetailsAsync, action.payload);
      yield put(requestSuccess(types.FETCH_DETAIL_SUCCESS, data));
    } else {
    }
  } catch (error) {
    yield put(raiseError(error));    
  }
}

export default function* rootData() {
  yield takeEvery(types.SHOULD_FETCH_DETAIL, getDetails);
}
