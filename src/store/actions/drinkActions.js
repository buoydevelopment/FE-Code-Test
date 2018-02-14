import {
    GET_DRINKS,
    GET_DRINKS_DETAILS
} from '../constants'

export default class DrinkActions {

    static getDrinks() {
        return {
            type: GET_DRINKS
        }
    }

    static getDrinkDetails(id) {
        return {
            type: GET_DRINKS_DETAILS,
            payload: {id : id}
        }
    }
}