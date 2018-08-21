import { get } from './request';

export async function fetchCocktailList (baseUrl) {
  const url = `${baseUrl}/1/filter.php?g=Cocktail_glass`;
  const { body } = await get(url);
  return body;
}

export async function fetchCocktail (baseUrl, { cocktailId }) {
  const url = `${baseUrl}/1/lookup.php?i=${cocktailId}`;
  const { body } = await get(url);
  return body;
}
