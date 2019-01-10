import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import cocktailSingleActions from "../Redux/CocktailSingleRedux";
import ConvertIngredientsFromApi from "../Transforms/ConvertIngredientsFromApi";

export function* getCocktailSingle(api, action) {
  // make the call to the api
  const { cocktailId } = action;

  try {
    const response = yield call(api.getCocktailSingle, cocktailId);
    if (response.ok) {
      const cocktail = path(["data", "drinks"], response)[0];
      const cocktailIngredients = ConvertIngredientsFromApi(cocktail);
      yield put(
        cocktailSingleActions.cocktailSuccess(cocktail, cocktailIngredients)
      );
    } else {
      yield put(cocktailSingleActions.cocktailError("response error"));
    }
  } catch (Error) {
    yield put(cocktailSingleActions.cocktailError(Error));
  }
}

export default getCocktailSingle;
