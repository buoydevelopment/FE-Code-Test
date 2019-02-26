// @flow

import {
  createStore,
} from './store';

import Navigation from './navigation';

const store = createStore();

Navigation.init(store);
