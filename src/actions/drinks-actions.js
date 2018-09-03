import DrinksAPI from '../api';

// Action names.
export const FILTER = 'FILTER';
export const FILTER_LOADING = 'FILTER_LOADING';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const LOOKUP = 'LOOKUP';
export const LOOKUP_LOADING = 'LOOKUP_LOADING';
export const LOOKUP_SUCCESS = 'LOOKUP_SUCCESS';
export const FILTER_DRINK_BY_NAME = 'FILTER_DRINK_BY_NAME';
export const SERVICE_ERROR = 'SERVICE_ERROR';

// Action creators.
export function filterLoadingAction(loading) {
  return {
    type: FILTER_LOADING,
    loading
  };
};

export function lookupLoadingAction(loading) {
  return {
    type: LOOKUP_LOADING,
    loading
  };
};

export function filterSuccessAction(drinks) {
  return {
    type: FILTER_SUCCESS,
    drinks
  };
}

export function lookupSuccessAction(selectedDrink) {
  return {
    type: LOOKUP_SUCCESS,
    selectedDrink
  };
}

export function filterAction(g) {
  return (dispatch) => {
    dispatch(filterLoadingAction(true));

    const queryParameters = { g };
    const serviceName = 'filter';
    const options = { serviceName, queryParameters };

    return DrinksAPI(options)
      .then(response => response.json())
      .then(data => {
        dispatch(filterSuccessAction(data.drinks));
        dispatch(filterLoadingAction(false));
      })
      .catch(error => {
        console.log('Oops, there was an error:', error);
        dispatch(filterLoadingAction(false));
        dispatch(serviceErrorAction());
      });
  }
};

export const lookupAction = (drinkId) => {
  return (dispatch) => {
    dispatch(lookupLoadingAction(true));

    const queryParameters = { i: drinkId };
    const serviceName = 'lookup';
    const options = { serviceName, queryParameters };

    return DrinksAPI(options)
      .then(response => response.json())
      .then(data => {
        dispatch(lookupSuccessAction(data.drinks[0]));
        dispatch(lookupLoadingAction(false));
      })
      .catch(error => {
        console.log('Oops, there was an error:', error);
        dispatch(lookupLoadingAction(false));
        dispatch(serviceErrorAction());
      });
  }
};

export function filterDrinkByName(drinkName) {
  return {
    type: FILTER_DRINK_BY_NAME,
    drinkName,
  };
}

// TODO: Discriminate between types of errors.
export function serviceErrorAction() {
  return {
    type: SERVICE_ERROR,
  };
}
