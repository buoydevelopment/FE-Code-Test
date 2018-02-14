import {
    GET_DRINKS, GET_DRINKS_SUCCESS, GET_DRINKS_FAILURE,
    GET_DRINKS_DETAILS, GET_DRINKS_DETAILS_SUCCESS, GET_DRINKS_DETAILS_FAILURE
} from '../constants';

import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';

export default class drinkActions {

    //Epic middleware for login
    static getDrinkEpic = (action$) =>
        action$.ofType(GET_DRINKS)
            .switchMap(({ payload }) => {
                return HttpService.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: GET_DRINKS_SUCCESS,
                                payload: response

                            });
                        }
                        return Observable.of({
                            type: GET_DRINKS_FAILURE,
                            payload: "Unable to load drinks! Try Again "
                        });
                    });
            })

    static getDrinkDetailsEpic = (action$) =>
        action$.ofType(GET_DRINKS_DETAILS)
            .switchMap(({ payload }) => {
                return HttpService.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${payload.id}`)
                    .switchMap(({ response }) => {
                        if (response.err) {
                            return Observable.of({
                                type: GET_DRINKS_DETAILS_FAILURE,
                                payload: response.err
                            });
                        }
                        return Observable.of({
                            type: GET_DRINKS_DETAILS_SUCCESS,
                            payload: response
                        });
                    });
            })
}