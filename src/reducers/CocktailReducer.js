import {ACT_LOAD_COCKTAILS, SELECTED_COCKTAIL} from '../actions/ActionTypes';

const initialState = {
    cocktails: {},
    cocktailDetail: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACT_LOAD_COCKTAILS:
            return Object.assign({}, state, { cocktails: action.props });
            break;
        case SELECTED_COCKTAIL:
            return Object.assign({}, state, {cocktailDetail: action.props});
            break;
        default:
            return state
    }

}
