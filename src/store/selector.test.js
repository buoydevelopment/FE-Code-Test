import * as selector from './selector';

const mockCocktails = [
	{
    strDrinkThumb: "imageUrl",
    strDrink: "Gin Tonic",
    idDrink: "CocktailId",
    ingredient1: "Ingredient 1",
	},
	{
    strDrinkThumb: "imageUrl",
    strDrink: "Ferne",
    idDrink: "CocktailId",
    ingredient1: "Ingredient 1",
	},
	{
    strDrinkThumb: "imageUrl",
    strDrink: "Martini",
    idDrink: "CocktailId",
    ingredient1: "Ingredient 1",
	},
];

const visible = [mockCocktails[0].idDrink, mockCocktails[1].idDrink, mockCocktails[2].idDrink];

const mockState = {
  app: {
		visible: visible,
    cocktails: mockCocktails,
    selectedContac: mockCocktails[2],
    filter: 'mart'
  }
};

describe('Cross App Selectors', () => {

  it('Should return all the cocktails', () => {
    const expected = mockCocktails;
    expect(selector.getCocktails(mockState)).toEqual(expected);
  });

  it('Should return the visible cocktails', () => {
    const expected = visible;
    expect(selector.getVisible(mockState)).toEqual(expected);
  });

  it('Should return the filtered cocktails', () => {
    const expected = mockCocktails.filter(c => c.strDrink.toUpperCase().includes(mockState.app.filter.toUpperCase()));
    expect(selector.getFilteredCocktails(mockState)).toEqual(expected);
  });

});