import { all } from 'redux-saga/effects'
import DrinksListSaga from './containers/DrinksList/saga'
import DrinkSaga from './containers/Drink/saga'

export default function* rootSaga () {
    yield all([
        DrinksListSaga(),
        DrinkSaga()
    ])
}