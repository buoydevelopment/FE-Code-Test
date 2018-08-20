import { all } from 'redux-saga/effects';
import cocktailsSagas from './cocktail/saga';

export default function* rootSaga(getState) {
  yield all([
    cocktailsSagas()
  ]);
}