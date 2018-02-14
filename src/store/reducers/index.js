import { combineReducers } from 'redux'
import DrinksReducer from './drinkReducer'

const rootReducer = combineReducers({
    DrinksReducer: DrinksReducer
})

export default rootReducer