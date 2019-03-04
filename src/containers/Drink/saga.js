import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SAGA_COCKTAIL_GET, CHANGE_COCKTAIL_PROPS } from './constants';

function* getCocktail(action) {
    const response = yield call(fetch, `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${action.props.id}`);
    // Bind the function to response before call it
    const jsonFunc = response.json.bind(response);
    
    // Convert the body stream to json data
    const jsonData = yield call(jsonFunc);

    yield put({
        type: CHANGE_COCKTAIL_PROPS,
        props: {
            cocktail: jsonData.drinks[0]
        }
    });
}
/*
 * Watcher
 */
function* AuthWatcher() {
    yield all([
        takeLatest(SAGA_COCKTAIL_GET, getCocktail)
    ]);
}

export default AuthWatcher;