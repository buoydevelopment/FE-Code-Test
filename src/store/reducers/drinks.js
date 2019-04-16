import { UPDATE_DRINKS } from "../actions/actionTypes";

const initialState = {
    drinks: [],
};

const reducer = (state = initialState, action) => {
    return { ...state }
}
export default reducer;