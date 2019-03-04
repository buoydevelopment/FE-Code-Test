import { SAGA_COCKTAIL_GET, CHANGE_COCKTAIL_PROPS } from './constants';

export function getCocktail(props) {
  return { type: SAGA_COCKTAIL_GET, props: props} ;
}

/*
 * Change cocktails props (no saga action)
 */
export function changeCocktailProps(props){
  return { type: CHANGE_COCKTAIL_PROPS, props: props };
}