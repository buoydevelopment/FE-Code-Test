const baseURL = "http://www.thecocktaildb.com/api/json/v1/1/";

export async function getCocktails() {
  const url = `${baseURL}filter.php?g=Cocktail_glass`;
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const cocktails = jsonResponse.drinks;
    return cocktails;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
