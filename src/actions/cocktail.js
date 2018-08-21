import * as api from '../api/cocktail';
import { makeApiActionCreator } from './utils';

export const COCKTAIL_LIST_FETCH_START = 'COCKTAIL_LIST_FETCH_START';
export const COCKTAIL_LIST_FETCH_SUCCESS = 'COCKTAIL_LIST_FETCH_SUCCESS';
export const COCKTAIL_LIST_FETCH_ERROR = 'COCKTAIL_LIST_FETCH_ERROR';

export const COCKTAIL_FETCH_START = 'COCKTAIL_FETCH_START';
export const COCKTAIL_FETCH_SUCCESS = 'COCKTAIL_FETCH_SUCCESS';
export const COCKTAIL_FETCH_ERROR = 'COCKTAIL_FETCH_ERROR';

export const fetchCocktailList = makeApiActionCreator(api.fetchCocktailList, COCKTAIL_LIST_FETCH_START, COCKTAIL_LIST_FETCH_SUCCESS, COCKTAIL_LIST_FETCH_ERROR);
export const fetchCocktail = makeApiActionCreator(api.fetchCocktail, COCKTAIL_FETCH_START, COCKTAIL_FETCH_SUCCESS, COCKTAIL_FETCH_ERROR);
