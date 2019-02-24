import {
	SET_COCKTAILS
} from '../actions/types';
import Cocktail from '../entities/Cocktail';


const initialState = {
	cocktails: [],
	isFetchingCategories: true
};

const cocktailData = [];

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_COCKTAILS:

			action.payload.drinks.forEach( ( cocktail ) => {
				cocktailData.push( Cocktail.fromJSON( cocktail ) );
			} );
			return Object.assign( {}, state,
				{ cocktails: cocktailData, isFetchingCategories: false } );
		default:
			return state;
	}
};
