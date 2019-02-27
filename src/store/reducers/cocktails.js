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
  getAllTimestamp: number,
};

export const initialState: TStore = {
  byId: {},
  allIds: [],
  getAllTimestamp: 0,
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
      byId: list.reduce((acc, cur) => ({
        ...acc,
        [cur.id]: { ...cur },
      }), {}),
      allIds: list.map(({ id }) => id),
      getAllTimestamp: timestamp,
    };
  },
}, initialState);
