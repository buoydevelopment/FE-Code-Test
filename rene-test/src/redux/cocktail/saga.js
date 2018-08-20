import { all, takeEvery, fork } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import actions from './actions';

export function* listRequest() {
  yield takeEvery('COCKTAIL_LIST_REQUEST', function*({ payload }) {
    console.log('list requested');
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest)
  ]);
}