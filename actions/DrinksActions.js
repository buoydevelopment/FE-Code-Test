import {
    DRINKS_DATA_LOADED
  } from './types';
  
  export const drinksDataLoaded = (data) => {
    return {
      type: DRINKS_DATA_LOADED,
      payload: data
    };
  };
  