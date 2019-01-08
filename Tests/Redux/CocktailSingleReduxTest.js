import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CocktailSingleRedux' //import redux file to test.
import cocktailFixture from '../../App/Fixtures/CocktailFixture';
import cocktailIngredientsFixture from '../../App/Fixtures/CocktailIngredientsFixture';

//test for the request action
test('request', () => {
  const cocktailId = '16108'; //data to pass to the action if needed
  const state = reducer(INITIAL_STATE, Actions.cocktailRequest(cocktailId)); //request action

  //for every state that will be modified by the reduces, should be an expect with the propper matcher
  expect(state.cocktail).toBeNull();
  expect(state.cocktailError).toBe(false);
  expect(state.cocktailLoading).toBe(true);
});

//test for the success action
test('success', () => {
  const cocktail = cocktailFixture; //data to pass to the action if needed
  const cocktailIngredients = cocktailIngredientsFixture; //data to pass to the action if needed
  const state = reducer(INITIAL_STATE, Actions.cocktailSuccess(cocktail,cocktailIngredients)) //success action

  //for every state that will be modified by the reduces, should be an expect with the propper matcher
  expect(state.cocktail).toEqual(cocktail);
  expect(state.cocktailError).toBe(false);
  expect(state.cocktailIngredients).toEqual(cocktailIngredients);
  expect(state.cocktailLoading).toBe(false);

});

//test for the error action
test('failure', () => {
  const errorText = 'an error';

  const state = reducer(INITIAL_STATE, Actions.cocktailError(errorText)); //error action
  //for every state that will be modified by the reduces, should be an expect with the propper matcher
  expect(state.cocktail).toBeNull();
  expect(state.cocktailError).toBe(errorText);
  expect(state.cocktailIngredients).toBeNull()
  expect(state.cocktailLoading).toBe(false);
});
