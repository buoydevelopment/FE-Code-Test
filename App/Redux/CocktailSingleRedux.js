import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cocktailRequest: ["cocktailId"],
  cocktailSuccess: ["cocktail", "cocktailIngredients"],
  cocktailError: ["error"]
});

export const CocktailTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cocktail: null,
  cocktailError: false,
  cocktailIngredients: null,
  cocktailLoading: false
});

/* ------------- Selectors ------------- */

export const cocktailSingleSelector = {
  selectCocktail: state => state.cocktailSingle
};

/* ------------- Reducers Handlers ------------- */

// request the cocktail.
export const request = state =>
  state.merge({ cocktailLoading: true, cocktailError: false, cocktail: null });

// successful cocktail.
export const success = (state, action) => {
  const { cocktail, cocktailIngredients } = action;
  return state.merge({
    cocktail,
    cocktailError: false,
    cocktailIngredients,
    cocktailLoading: false
  });
};

// failed to get the cocktail.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({
    cocktailLoading: false,
    cocktailError: error,
    cocktail: null
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COCKTAIL_ERROR]: failure,
  [Types.COCKTAIL_REQUEST]: request,
  [Types.COCKTAIL_SUCCESS]: success
});
