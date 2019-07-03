import { removeEmpty, getObjProps } from './utils';

const obj = {
	idDrink: 1,
	drinkName: "Random Name",
	ingredient1: "Random Ingredient",
	ingredient2: "Random Ingredient",
	meassure1: "Random Meassure",
	meassure2: "Random Meassure",
	emptyProp1: "",
	emptyProp2: " ",
	emptyProp3: null,
	emptyProp4: undefined,
}

describe('Utils', () => {
  it('Should remove all empty props', () => {
    const expected = {
			idDrink: 1,
			drinkName: "Random Name",
			ingredient1: "Random Ingredient",
			ingredient2: "Random Ingredient",
			meassure1: "Random Meassure",
			meassure2: "Random Meassure",
		};
    expect(removeEmpty(obj)).toEqual(expected);
	});
	
  it('Should return the props that match the string searched for', () => {
    const expected = ['ingredient1', 'ingredient2'];
    expect(getObjProps(obj, 'ingredient')).toEqual(expected);
  });
})