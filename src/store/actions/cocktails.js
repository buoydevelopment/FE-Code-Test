// @flow

import { createActions } from 'redux-actions';

import {
  type TCocktails,
} from '../../api/cocktails';

export type TDispatchers = {
  getAll: (?{ failures?: number }) => any,
  getAllTryAgain: () => any,
  getAllAbort: () => any,
};

export type TPayloads = {
  getAllSuccess: {
    list: TCocktails,
    timestamp: number,
  },
};

export const {
  cocktails: {
    getAll,
    getAllStart,
    getAllSuccess,
    getAllFailure,
    getAllAbort,
    getAllTryAgain,
    getAllTryAgainBuffer,
  },
} = createActions({
  COCKTAILS: {
    GET_ALL: [
      undefined,
      ({ failures } = { failures: 0 }) => ({ failures: failures || 0 }),
    ],
    GET_ALL_START: undefined,
    GET_ALL_SUCCESS: undefined,
    GET_ALL_FAILURE: undefined,
    GET_ALL_ABORT: undefined,
    GET_ALL_TRY_AGAIN: undefined,
    GET_ALL_TRY_AGAIN_BUFFER: undefined,
  },
});
