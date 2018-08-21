import { fromJS } from 'immutable';

import {
  LOAD_COCKTAILS,
  LOAD_COCKTAILS_SUCCESS,
  LOAD_COCKTAILS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  cocktails: false,
});

function cocktailListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COCKTAILS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('cocktails', false);
    case LOAD_COCKTAILS_SUCCESS:
      return state
        .set('cocktails', action.cocktails.drinks)
        .set('loading', false);
    case LOAD_COCKTAILS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default cocktailListReducer;
