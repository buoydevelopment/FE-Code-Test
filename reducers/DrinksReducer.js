import {
    DRINKS_DATA_LOADED
  } from '../actions/types';
  
  const INITIAL_STATE = {
    allDrinks: [],
    loading: true
  };
  
  export default (state = INITIAL_STATE, action) => {  
    switch (action.type) {
      case DRINKS_DATA_LOADED:
        return { ...state, allDrinks: action.payload, loading: false };
      default:
        return state;
    }
  };