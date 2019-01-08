import apisauce from 'apisauce'
import AppConfig from '../Config/AppConfig'


const create = (baseURL = AppConfig.API_BASE_URL) => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });


  const getCocktailList = () => api.get(AppConfig.API_COCKTAIL_LIST);
  const getCocktailSingle = (cocktailId) => {
    return api.get(AppConfig.API_COCKTAIL_SINGLE+cocktailId);
  };


  return {
    // a list of the API functions.
    getCocktailList,
    getCocktailSingle,
  }
};

// return back our create method as the default.
export default {
  create
}
