import { combineReducers } from 'redux';
import drinksReducer from './drinks-reducer';

const rootReducer = combineReducers({ drinksReducer });

export default rootReducer;