import {
    GET_DRINKS, GET_DRINKS_SUCCESS, GET_DRINKS_FAILURE,
    GET_DRINKS_DETAILS, GET_DRINKS_DETAILS_SUCCESS, GET_DRINKS_DETAILS_FAILURE
} from '../constants';

const initialState = {
    drinks: {},
    drinkDetails: {},
    loading: false,
    error: {},
}

export default function DrinksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRINKS:
            return {
                ...state,
                loading: true,
                error: {},
            }
        case GET_DRINKS_SUCCESS:
            return {
                ...state,
                drinks: action.payload,
                loading: false,
                error: {},
            }
        case GET_DRINKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case GET_DRINKS_DETAILS:
            return {
                ...state,
                loading: true,
                error: {},
            }
        case GET_DRINKS_DETAILS_SUCCESS:
            return {
                ...state,
                drinkDetails: action.payload,
                loading: false,
                error: {},
            }
        case GET_DRINKS_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}