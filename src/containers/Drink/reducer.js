import { CHANGE_COCKTAIL_PROPS } from './constants';

const initialState = {
    cocktail: [],
}

export default function reducerAbility(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COCKTAIL_PROPS:
            return Object.assign({}, state, action.props)
        default:
            return state
    }
}