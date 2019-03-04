import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import drinksListReducer from './containers/DrinksList/reducer'
import drinkReducer from './containers/Drink/reducer'

const rootReducer = combineReducers({
    drinksListReducer,
    drinkReducer,
    routing: routerReducer
});

export default rootReducer;
