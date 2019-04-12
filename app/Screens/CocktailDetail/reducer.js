import {
  LOAD_COCKTAIL_DETAIL,
  LOAD_COCKTAIL_DETAIL_SUCCESS,
  LOAD_COCKTAIL_DETAIL_ERROR,
} from './constants';

export const initialState = {
  drink: null,
  loadingDrink: false,
  loadingDrinkError: false,
};

export default function cocktailDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COCKTAIL_DETAIL:
      return Object.assign({}, state, { loadingDrink: true, loadingDrinkError: false });
    case LOAD_COCKTAIL_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        drink: {
          name: action.name,
          image: action.image,
          instructions: action.instructions,
          ingredients: action.ingredients,
        },
        loadingDrink: false,
        loadingDrinkError: false,
      });
    case LOAD_COCKTAIL_DETAIL_ERROR:
      return Object.assign({}, state, { loadingDrink: false, loadingDrinkError: true });
    default:
      return state;
  }
}
