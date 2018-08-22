import { fromJS } from 'immutable';

import {
  LOAD_COCKTAIL_DETAIL,
  LOAD_COCKTAIL_DETAIL_SUCCESS,
  LOAD_COCKTAIL_DETAIL_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  cocktail: false,
});

function cocktailDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COCKTAIL_DETAIL:
      return state
        .set('loading', true)
        .set('error', false)
        .set('cocktail', false);
    case LOAD_COCKTAIL_DETAIL_SUCCESS:
      return state
        .set('cocktail', action.cocktail.drinks[0])
        .set('loading', false);
    case LOAD_COCKTAIL_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default cocktailDetailReducer;
