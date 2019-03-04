import { SAGA_COCKTAILS_ALL, CHANGE_COCKTAILS_PROPS } from './constants';

export function getAll(){
  return { type: SAGA_COCKTAILS_ALL };
}

/*
 * Change cocktails props (no saga action)
 */
export function changeCocktailsProps(props){
  return { type: CHANGE_COCKTAILS_PROPS, props: props };
}