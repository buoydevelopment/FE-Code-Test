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
    changeApi,
    changedApi,
    loaded,
    loadedSuccess,
  },
} = createActions({
  CONFIG: {
    CHANGE_API: undefined,
    CHANGED_API: undefined,
    LOADED: undefined,
    LOADED_SUCCESS: undefined,
  },
});
