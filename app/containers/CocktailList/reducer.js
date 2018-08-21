import { fromJS } from 'immutable';

import {
  LOAD_COCKTAIL_LIST,
  LOAD_COCKTAIL_LIST_SUCCESS,
  LOAD_COCKTAIL_LIST_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  cocktailList: false,
});

function cocktailListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COCKTAIL_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('cocktailList', false);
    case LOAD_COCKTAIL_LIST_SUCCESS:
      return state
        .set('cocktailList', action.cocktailList.drinks)
        .set('loading', false);
    case LOAD_COCKTAIL_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default cocktailListReducer;
