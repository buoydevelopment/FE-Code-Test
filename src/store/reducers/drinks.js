import { UPDATE_DRINKS } from "../actions/actionTypes";

const initialState = {
    items: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return { items: action.drinks }
        default:
            return { ...state }
    }
}
export default reducer;