import { UPDATE_DRINKS, SELECT_DRINK } from "../actions/actionTypes";

const initialState = {
    items: [],
    selected: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return { ...state, items: action.drinks }
        case SELECT_DRINK:
            return { ...state, selected: action.drink }
        default:
            return { ...state }
    }
}
export default reducer;