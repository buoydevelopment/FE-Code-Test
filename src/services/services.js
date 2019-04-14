export const getDrinks = () =>
  fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
  )
    .then(data => data.json())
    .catch(error => error);

export const getDrinkDetail = id =>
  fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(data => data.json())
    .catch(error => error);
