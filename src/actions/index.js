//home

export const get_recipe_list = () => {
  return dispatch => fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'GET_RECIPE_LIST', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}

export const get_recipe = (recipe_id) => {
  return dispatch => fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + recipe_id)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'GET_RECIPE', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}
