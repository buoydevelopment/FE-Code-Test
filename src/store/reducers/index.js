// @flow

import {
  combineReducers,
} from 'redux';

import {
  reducer as navigation,
  initialState as initialStateNavigation,
  type TStore as TStoreNavigation,
} from './navigation';

import {
  reducer as cocktails,
  initialState as initialStateCocktails,
  type TStore as TStoreCocktails,
} from './cocktails';

import {
  reducer as config,
  initialState as initialStateConfig,
  type TStore as TStoreConfig,
} from './config';

// $FlowFixMe
export const reducer = combineReducers({
  navigation,
  cocktails,
  config,
});

export type TStore = {
  navigation: TStoreNavigation,
  cocktails: TStoreCocktails,
  config: TStoreConfig,
};

export const initialState: TStore = {
  navigation: initialStateNavigation,
  cocktails: initialStateCocktails,
  config: initialStateConfig,
};
