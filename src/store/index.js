// @flow

import {
  createStore as _createStore,
  applyMiddleware,
} from 'redux';

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import {
  createEpicMiddleware,
  epicMiddleware,
} from 'redux-observable';

import {
  persistStore,
  persistReducer,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import Config from 'react-native-config';

import {
  reducer,
  initialState,
  type TStore,
} from './reducers';

import rootEpic from './epics';

import API, {
 type IAPI, 
} from '../api';

import Cocktails, {
  type ICocktails,
} from '../api/cocktails';

import Navigation, {
  type INavigation,  
} from '../navigation';

import {
  changeApi,
  loaded as configLoaded,
} from './actions/config';

export const createStore = (): any => {
  const api = new API(
    Config.API_DEV_HOST,
    Config.API_DEV_PORT,
    Config.API_VERSION_1
  );
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      api,
      cocktails: new Cocktails(api),
      now: Date.now,
      navigation: Navigation,
    },
  });
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'config' ],
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  // $FlowFixMe
  const store = _createStore(
    persistedReducer,
    initialState,
    applyMiddleware(
      epicMiddleware
    )
  );
  persistStore(store, null, () => {
    store.dispatch(configLoaded());
  });
  epicMiddleware.run(rootEpic);
  return store;
};

export type TDependencies = {
  api: IAPI,
  cocktails: ICocktails,
  now: () => number,
  navigation: INavigation,
};

export type TReduxStore = {
  getState: () => TStore,
  subscribe: (TStore) => any,
};
