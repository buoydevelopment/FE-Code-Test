import * as types from './types';
import { signin, signup } from '../lib/api';

export function setCocktails({ cocktails }) {
  return {
    type: types.SET_COCKTAIL_SESSION,
    cocktails,
  };
}

// export function setData({ image }) {
//   return {
//     type: types.SET_TEMP_IMAGE,
//     image,
//   };
// }

export function removeCocktails() {
  return (dispatch) => {
    dispatch(setCocktails({ cocktails: null }));
  };
}

export function addCocktails(cocktails) {
  return (dispatch) => {
    dispatch(setCocktails({ cocktails: cocktails }));
  };
}