// @flow

import { createActions } from 'redux-actions';

export type TDispatchers = {
  loaded: () => any,
};

export type TPayloads = {
  loadedSuccess: {
    timestamp: number,
  },
};

export const {
  config: {
    loaded,
    loadedSuccess,
  },
} = createActions({
  CONFIG: {
    LOADED: undefined,
    LOADED_SUCCESS: undefined,
  },
});
