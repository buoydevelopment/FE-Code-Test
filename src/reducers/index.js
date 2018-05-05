import { combineReducers } from 'redux';
import * as cocktailsReducer from './cocktails';
import * as persistReducer from './persist';
import * as connectionReducer from './connectionState';

export default combineReducers(Object.assign(
  cocktailsReducer,
  persistReducer,
  connectionReducer
));
