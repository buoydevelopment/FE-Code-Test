import { UPDATE_DRINKS } from "../actions/actionTypes";

const initialState = {
    drinks: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return { drinks: action.drinks }
        default:
            return { ...state }
    }
}
export default reducer;