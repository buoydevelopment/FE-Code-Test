import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */

import { cocktailListTypes } from '../Redux/CocktailListRedux'
import { CocktailTypes } from '../Redux/CocktailSingleRedux'

/* ------------- Sagas ------------- */

import { getCocktailList } from './CocktailListSagas'
import { getCocktailSingle } from './CocktailSingleSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(cocktailListTypes.COCKTAIL_LIST_REQUEST, getCocktailList, api),
    takeLatest(CocktailTypes.COCKTAIL_REQUEST, getCocktailSingle, api)
  ])
}
