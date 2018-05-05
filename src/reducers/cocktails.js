import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const cocktails = createReducer(
  {},
  {
    [types.SET_COCKTAIL_SESSION](state, action) {
      return action.cocktails;
    },
  },
);
