import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SAGA_COCKTAILS_ALL, CHANGE_COCKTAILS_PROPS } from './constants';

function* getCocktails() {
    const response = yield call(fetch, 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
    // Bind the function to response before call it
    const jsonFunc = response.json.bind(response);
    // Convert the body stream to json data
    const jsonData = yield call(jsonFunc);

    yield put({
        type: CHANGE_COCKTAILS_PROPS,
        props: {
            cocktails: jsonData.drinks
        }
    });
}
/*
 * Watcher
 */
function* AuthWatcher() {
    yield all([
        takeLatest(SAGA_COCKTAILS_ALL, getCocktails)
    ]);
}

export default AuthWatcher;