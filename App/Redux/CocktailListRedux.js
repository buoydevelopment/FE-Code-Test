import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cocktailListRequest: null,
  cocktailListSuccess: ["cocktailList"],
  cocktailListError: null,
  cocktailListFiltered: ["cocktailListFiltered"],
  setSearchText: ["searchText"],
  setSearchInputState: ["searchInputState"]
});

export const cocktailListTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cocktailList: null,
  cocktailListError: false,
  cocktailListFiltered: null,
  cocktailListLoading: false,
  searchText: "",
  searchInputState: false
});

/* ------------- Selectors ------------- */

export const cocktailListSelector = {
  selectCocktailList: state => state.cocktailList
};

/* ------------- Reducers Handlers ------------- */

// request the cocktail list.
export const request = state =>
  state.merge({
    cocktailListLoading: true,
    cocktailListError: false,
    cocktailList: null
  });

// successful cocktail list lookup.
export const success = (state, action) => {
  const { cocktailList } = action;
  return state.merge({
    cocktailList,
    cocktailListError: false,
    cocktailListFiltered: cocktailList,
    cocktailListLoading: false
  });
};

// failed to get the cocktail list
export const failure = state =>
  state.merge({
    cocktailListLoading: false,
    cocktailListError: true,
    cocktailList: null
  });

// cocktail filtered list.
export const filter = (state, action) => {
  const { cocktailListFiltered } = action;
  return state.merge({ cocktailListFiltered });
};

export const setSearchText = (state, action) => {
  const { searchText } = action;
  return state.merge({ searchText });
};

export const setSearchInputState = (state, action) => {
  const { searchInputState } = action;
  if (!searchInputState) {
    return state.merge({
      searchInputState,
      cocktailListFiltered: state.cocktailList
    });
  }
  return state.merge({ searchInputState });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COCKTAIL_LIST_ERROR]: failure,
  [Types.COCKTAIL_LIST_FILTERED]: filter,
  [Types.COCKTAIL_LIST_REQUEST]: request,
  [Types.COCKTAIL_LIST_SUCCESS]: success,
  [Types.SET_SEARCH_TEXT]: setSearchText,
  [Types.SET_SEARCH_INPUT_STATE]: setSearchInputState
});
