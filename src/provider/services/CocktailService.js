import ServiceConfig from './CocktailConfig';

export default class AppService {
  static getCocktails() {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = ServiceConfig.cocktails;
        let response = await ServiceConfig.APIConnector.get(endpoint, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  static getCocktailsById(IdDrink) {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = ServiceConfig.cocktailsById;
        let endpoinWithParams = `${endpoint}?i=${IdDrink}`;
        let response = await ServiceConfig.APIConnector.get(endpoinWithParams, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
