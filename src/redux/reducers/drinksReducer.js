import { actionTypes } from "../actions";

const initialState = {
  drinks: [],
  drinkSelected: {},
  filter: "",
  fetching: false,
  error: ""
};

export const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_REQUEST:
      return { ...state, fetching: true };
    case actionTypes.FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.payload,
        fetching: false
      };
    case actionTypes.FETCH_DRINK_DETAIL_SUCCESS:
      return {
        ...state,
        drinkSelected: action.payload,
        fetching: false
      };
    case actionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    case actionTypes.RAISE_ERROR:
      console.log("soy el reducer", action.payload.error);
      return { ...state, error: action.payload.error, fetching: false };
    default:
      return state;
  }
};
