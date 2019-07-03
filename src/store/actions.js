import * as types from '../constants/actionTypes';
import { URLS } from '../constants/endpoints';
import { removeEmpty } from '../shared/utils/utils';

// REQUEST ACTIONS
const fetchList = () => ({ type: types.FETCH_LIST });
export const fetchDetail = () => ({ type: types.FETCH_DETAIL });

// SUCCESS ACTIONS
export const requestSuccess = (type, data) => ({
  type: type,
  payload: data,
});

// ERROR ACTIONS
const requestError = (type, error) => ({
  type: type,
  payload: error,
});
export const raiseError = (error) => ({
  type: types.RAISE_ERROR,
  payload: error,
});

// OTHER ACTIONS
export const selectDrink = (drink) => ({
	type: types.SELECT_DRINK,
	payload: drink,
});

export const cleanDetail = () => ({ type: types.CLEAN_DETAIL });

export const getDetailsAsync = async (id) => {
  try {
    const response = await fetch(URLS.DETAIL_URL + id);
    const data = await response.json();
    return removeEmpty(data.drinks[0]);
  } catch (error) {
    this.raiseError(error);
  }
}

export const getList = () => dispatch => {
  dispatch(fetchList());
	return fetch(URLS.LIST_URL)
		.then(response => response.json())
		.then(data => dispatch(requestSuccess(types.FETCH_LIST_SUCCESS, data.drinks)))
		.catch(error => dispatch(requestError(types.FETCH_LIST_ERROR, error)));
}

export const getDetail = (id) => dispatch => {
  dispatch(fetchDetail());
	return fetch(URLS.DETAIL_URL + id)
		.then(response => response.json())
		.then(data => dispatch(requestSuccess(types.SELECT_DRINK, removeEmpty(data.drinks[0]))))
		.catch(error => dispatch(requestError(types.FETCH_DETAIL_ERROR, error)));
}

export const shouldGetIngredients = (id) => ({ type: types.SHOULD_FETCH_DETAIL, payload: id });