// @flow

import {
  combineEpics,
} from 'redux-observable';

import cocktails from './cocktails';
import navigation from './navigation';
import config from './config';

export default combineEpics(
  ...navigation,
  ...cocktails,
  ...config,
);
