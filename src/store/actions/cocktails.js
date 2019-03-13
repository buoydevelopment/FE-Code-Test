// @flow

import { createActions } from 'redux-actions';

import {
  type TCocktails,
  type TCocktail,
} from '../../api/cocktails';

export type TDispatchers = {
  getAll: (?{ failures?: number }) => any,
  getAllTryAgain: () => any,
  getAllAbort: () => any,
  get: ({ id: string, failures?: number }) => any,
  getTryAgain: () => any,
  getAbort: () => any,
  toggleFavorite: ({ id: string }) => any,
};

export type TPayloads = {
  getAllSuccess: {
    list: TCocktails,
    timestamp: number,
  },
  getSuccess: {
    item: TCocktail,
    timestamp: number,
  },
  toggleFavorite: {
    id: string
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

    get,
    getStart,
    getSuccess,
    getFailure,
    getAbort,
    getTryAgain,
    getTryAgainBuffer,

    toggleFavorite,
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

    GET: [
      ({ id }) => ({ id }),
      ({ failures }) => ({ failures }),
    ],
    GET_START: undefined,
    GET_SUCCESS: undefined,
    GET_FAILURE: undefined,
    GET_ABORT: undefined,
    GET_TRY_AGAIN: undefined,
    GET_TRY_AGAIN_BUFFER: undefined,

    TOGGLE_FAVORITE: undefined,
  },
});
