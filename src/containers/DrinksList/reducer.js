import { CHANGE_COCKTAILS_PROPS } from './constants';

const initialState = {
    cocktails: [],
}

export default function reducerAbility(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COCKTAILS_PROPS:
            return Object.assign({}, state, action.props)
        default:
            return state
    }
}