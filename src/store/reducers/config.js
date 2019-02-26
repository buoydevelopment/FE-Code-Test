// @flow

import { handleActions } from 'redux-actions';

import {
  loadedSuccess,
  type TPayloads,
} from '../actions/config';

export type TStore = {
  loadedTimestamp: number,
};

export const initialState: TStore = {
  loadedTimestamp: 0,
};

export const reducer = handleActions<
  TStore,
  | loadedSuccess
>({

  [loadedSuccess]: (
    state: TStore,
    { payload: { timestamp } }: { payload: $PropertyType<TPayloads, 'loadedSuccess'> }
  ): TStore => {
    return {
      ...state,
      loadedTimestamp: timestamp,
    };
  },

}, initialState);
