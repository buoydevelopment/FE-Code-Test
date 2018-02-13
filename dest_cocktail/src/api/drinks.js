import axios from 'axios'

const drinksListUrl = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
const drinkUrl = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export function getDrinksList() {
  return axios.get(drinksListUrl);
};

export function getDrink(id) {
  return axios.get(drinkUrl + id);
};