import { combineReducers } from 'redux-immutablejs';
import cocktailReducer from './cocktail';
import globalReducer from './global';
/**
 * The application's main reducer
 */
export default combineReducers({
  global: globalReducer,
  cocktail: cocktailReducer
});
