import { createSelector } from 'reselect';

export const getCocktails = state => state.app.cocktails;
export const getVisible = state => state.app.visible;

export const getMockFilter = state => 'mar';

export const getFilteredCocktails = createSelector(
	[getCocktails, getMockFilter],
	(cocktails, filter) => {
		const result = cocktails.filter(c => c.strDrink.toUpperCase().includes(filter.toUpperCase()));
		return result || cocktails;
	}
);