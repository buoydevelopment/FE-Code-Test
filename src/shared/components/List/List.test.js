import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import { spy } from 'sinon';
import ListItem from '../ListItem/ListItem';

describe('List', () => {

  const cocktails = [
    {
			strDrinkThumb: "imageUrl",
			strDrink: "Cocktail Name",
			idDrink: "CocktailId",
			ingredient1: "Ingredient 1",
    },
    {
			strDrinkThumb: "imageUrl",
			strDrink: "Cocktail Name",
			idDrink: "CocktailId",
			ingredient1: "Ingredient 1",
    },
    {
			strDrinkThumb: "imageUrl",
			strDrink: "Cocktail Name",
			idDrink: "CocktailId",
			ingredient1: "Ingredient 1",
		},
  ];

	const props = {
    comp: ListItem,
    selectCocktail: spy(),
    list: cocktails,
    fetching: false,
    shouldGetIngredients: spy()
	};

  const list = shallow(
    <List {...props} />
  );

  it('Should render properly', () => {
    const expected = {
      strDrinkThumb: "imageUrl",
      strDrink: "Cocktail Name",
      idDrink: "CocktailId",
      ingredient1: "Ingredient 1",
    };

    expect(list.find(ListItem).length).toBe(3);
    expect(list.find('.cocktailList_container').length).toBe(1);
    expect(list.find('.title').length).toBe(1);
    expect(list.find(ListItem).length).toBe(3);
    expect(list.find(ListItem).last().props().cocktail).toEqual(expected);
    expect(list.find(ListItem).last().props().onClick).toBeDefined();
    expect(list.find(ListItem).last().props().shouldGetIngredients).toBeDefined();
  });
});