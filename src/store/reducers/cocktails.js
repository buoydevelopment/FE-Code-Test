// @flow

import { handleActions } from 'redux-actions';

import {
  getAllSuccess,
  type TPayloads,
} from '../actions/cocktails';

import {
  type TCocktail,
} from '../../api/cocktails'

export type TStore = {
  byId: {[string]: TCocktail},
  allIds: Array<string>,
};

export const initialState: TStore = {
  byId: {},
  allIds: [],
};

export const reducer = handleActions<
  TStore,
  | getAllSuccess
>
({
  [getAllSuccess]: (
    state: TStore,
    { payload: { list, timestamp } }: { payload: $PropertyType<TPayloads, 'getAllSuccess'> }
  ): TStore => {
    return {
      ...state,
    };
  },
}, initialState);
