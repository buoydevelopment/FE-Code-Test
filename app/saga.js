import { all, takeLatest } from 'redux-saga/effects';
import loadCocktailListInterception from './Screens/CocktailList/saga';
import loadCocktailDetailInterception from './Screens/CocktailDetail/saga';
import { LOAD_COCKTAIL_LIST } from './Screens/CocktailList/constants';
import { LOAD_COCKTAIL_DETAIL } from './Screens/CocktailDetail/constants';

export default function* root() {
  yield all([
    takeLatest(LOAD_COCKTAIL_LIST, loadCocktailListInterception),
    takeLatest(LOAD_COCKTAIL_DETAIL, loadCocktailDetailInterception),
  ]);
}
