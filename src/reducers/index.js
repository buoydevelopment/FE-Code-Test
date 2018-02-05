import { combineReducers } from 'redux';
import appReducer from './AppReducer'
import cocktailsReducer from './CocktailsReducer'

export default combineReducers({
  appReducer,
  cocktailsReducer
});
