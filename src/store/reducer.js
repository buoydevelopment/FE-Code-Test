import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_LIST:
    case types.FETCH_DETAIL:
      return { ...state, fetching: true };
    case types.FETCH_LIST_SUCCESS:
      return { ...state, cocktails: action.payload, fetching: false };
    case types.FETCH_DETAIL_ERROR:
    case types.FETCH_LIST_ERROR:
    case types.RAISE_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case types.CLEAN_DETAIL:
      return { ...state, selectedCocktail: {} };
    case types.FETCH_DETAIL_SUCCESS:
        const newCocktails = state.cocktails.map((c) => {
          if (c.idDrink !== action.payload.idDrink) return c;
          return {...c, ...action.payload};
        })
      return { ...state, cocktails: newCocktails, fetching: false };
    case types.SELECT_DRINK:
      return { ...state, selectedCocktail: action.payload, fetching: false };
    case types.SHOULD_FETCH_DETAIL:
      return { ...state, visible: [ ...state.visible, action.payload] };
    default:
      return { ...state };
  }
};