import { SET_COCKTAILS, SET_COCKTAIL_DETAIL } from '../actions/types';
import Cocktail from '../entities/Cocktail';

const initialState = {
  cocktails: [],
  isFetching: true,
  cocktail: null,
};

const cocktailData = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COCKTAILS:
      action.payload.drinks.forEach(cocktail => {
        cocktailData.push(Cocktail.fromJSON(cocktail));
      });
      return Object.assign({}, state, { cocktails: cocktailData, isFetching: false });
    case SET_COCKTAIL_DETAIL:
      return Object.assign({}, state, {
        cocktail: Cocktail.fromJSON(action.payload.drinks[0]),
        isFetching: false,
      });
    default:
      return state;
  }
};
