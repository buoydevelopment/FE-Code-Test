import utils from '../utils';
import {
  FILTER_LOADING,
  LOOKUP_LOADING,
  FILTER_SUCCESS,
  LOOKUP_SUCCESS,
  FILTER_DRINK_BY_NAME,
  SERVICE_ERROR
} from '../actions/drinks-actions';

const initialState = {};

const drinksReducer = (state = initialState, action) => {

  if (action.type === FILTER_LOADING) {
    return {
      ...state,
      loadingDrinks: action.loading,
    };
  }

  if (action.type === FILTER_SUCCESS) {
    return {
      ...state,
      drinks: action.drinks,
    };
  }

  if (action.type === LOOKUP_LOADING) {
    return {
      ...state,
      loadingSelectedDrink: action.loading,
    };
  }

  if (action.type === LOOKUP_SUCCESS) {
    return {
      ...state,
      selectedDrink: action.selectedDrink
    };
  }

  if (action.type === FILTER_DRINK_BY_NAME) {
    return {
      ...state,
      filteredDrinks: utils.filterByName(state.drinks, action.drinkName)
    };
  }

  if (action.type === SERVICE_ERROR) {
    return {
      ...state,
      serviceError: true,
    };
  }

  return state;
};

export default drinksReducer;