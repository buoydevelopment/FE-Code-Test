class Services {
  constructor(url) {
    this.baseUrl = url;
  }

  fetchCocktails = () => {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}/filter.php?g=Cocktail_glass`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((parsedRes) => {
        const { drinks } = parsedRes;
        return resolve(drinks);
      })
      .catch((error) => {
        return reject(error);
      });
    })
    
  }

  fetchCocktailDetail = (drinkId) => {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}/lookup.php?i=${drinkId}`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((parsedRes) => {
        return resolve(parsedRes)
      })
      .catch((error) => {
        return reject(error)
      });
    });
  }
}

export default Services;
