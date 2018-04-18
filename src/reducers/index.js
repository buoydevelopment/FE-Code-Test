import { combineReducers } from "redux";

import cocktailReducer from "./CocktailReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
    cocktails: cocktailReducer,
    appReducer: AppReducer
});

export default rootReducer;
