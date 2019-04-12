import { combineReducers } from 'redux';
import cocktailListReducer from './Screens/CocktailList/reducer';
import cocktailDetailReducer from './Screens/CocktailDetail/reducer';

const rootReducer = combineReducers({
  cocktailListReducer,
  cocktailDetailReducer,
});

export default rootReducer;
