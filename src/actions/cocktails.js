import CocktailService from '../provider/services/CocktailService';
import { SET_COCKTAILS } from './types';


export function fetchCocktails( callbackSuccess, callbackError ) {
	return ( dispatch ) => {
		CocktailService.getCocktails()
			.then( ( response ) => {
				dispatch( {
					type: SET_COCKTAILS,
					payload: response
				} );
				callbackSuccess( response );
			} )
			.catch( ( error ) => {
				callbackError( error );
			} );
	};
}
