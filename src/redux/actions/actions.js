import { actionTypes } from "./actionTypes";
import { getDrinks, getDrinkDetail } from "../../services";

const fetchDrinksSuccess = payload => ({
  type: actionTypes.FETCH_DRINKS_SUCCESS,
  payload
});

const fetchDrinkDetailSuccess = payload => ({
  type: actionTypes.FETCH_DRINK_DETAIL_SUCCESS,
  payload
});
const fetchRequest = () => ({
  type: actionTypes.FETCHING_REQUEST
});
const getError = error => ({
  type: actionTypes.RAISE_ERROR,
  payload: { error }
});

export const searchDrinks = payload => ({
  type: actionTypes.SET_FILTER,
  payload
});
export const fetchDrinks = () => {
  return dispatch => {
    dispatch(fetchRequest());

    getDrinks()
      .then(drinks_data => {
        dispatch(fetchDrinksSuccess(drinks_data.drinks));
      })
      .catch(error => dispatch(getError(error)));
  };
};

export const fetchDrinkDetail = id => {
  return dispatch => {
    dispatch(fetchRequest());
    getDrinkDetail(id)
      .then(drinks_data => {
        dispatch(fetchDrinkDetailSuccess(drinks_data.drinks[0]));
      })
      .catch(error => dispatch(getError(error)));
  };
};
