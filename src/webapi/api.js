const apiRoot = 'https://www.thecocktaildb.com/api/';
const errorMsg = 'Cannot contact the server. You may be offline. Please check your internet connection';

export function getCocktails() {
  return rawAPIFetch(`${apiRoot}json/v1/1/filter.php?g=Cocktail_glass`);
}

export function getCocktailDetail(cocktailId) {
  return rawAPIFetch(`${apiRoot}json/v1/1/lookup.php?i=${cocktailId}`);
}

export function rawAPIFetch(url: string): Promise<any> {

  return fetch(url)
    .then( async (response) => {
      const resultAsJson = await response.json();
      return resultAsJson;
    })
    .catch(function(error) {
      return Promise.reject(new Error(errorMsg + error));
    });

}
