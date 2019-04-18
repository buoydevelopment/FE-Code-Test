import { UPDATE_DRINKS, SELECT_DRINK, LOADING_DRINKS } from "../actions/actionTypes";

const initialState = {
    items: [],
    isLoadingDrinks: true, 
    selected: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return { ...state, items: action.drinks, isLoadingDrinks: false }
        case SELECT_DRINK:
            return { ...state, selected: action.drink }
        case LOADING_DRINKS:
            return { ...state, isLoadingDrinks: true }
        default:
            return { ...state }
    }
}
export default reducer;