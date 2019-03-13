// @flow

import {
  type IAPI,
} from './index';

export type TCocktail = {
  id: string,
  image: string,
  brief: string,
  instructions: string,
  ingredients: Array<string>,
  measures: Array<string>,
};

export type TCocktails = Array<TCocktail>;

type TCocktailRaw = {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string,
  strIngredient1?: string,
  strIngredient2?: string,
  strIngredient3?: string,
  strIngredient4?: string,
  strIngredient5?: string,
  strIngredient6?: string,
  strIngredient7?: string,
  strIngredient8?: string,
  strIngredient9?: string,
  strIngredient10?: string,
  strIngredient11?: string,
  strIngredient12?: string,
  strIngredient13?: string,
  strIngredient14?: string,
  strIngredient15?: string,
  strMeasure1?: string,
  strMeasure2?: string,
  strMeasure3?: string,
  strMeasure4?: string,
  strMeasure5?: string,
  strMeasure6?: string,
  strMeasure7?: string,
  strMeasure8?: string,
  strMeasure9?: string,
  strMeasure10?: string,
  strMeasure11?: string,
  strMeasure12?: string,
  strMeasure13?: string,
  strMeasure14?: string,
  strMeasure15?: string,
  strInstructions: string,
};
type TCocktailsRaw = {
  drinks: Array<TCocktailRaw>
};

export type TGetAllResponse = TCocktails | null;

export type TGetResponse = TCocktail | null;

export interface ICocktails {
  +constructor: (IAPI) => any;
  +getAll: () => Promise<TGetAllResponse>;
  +get: (id: string) => Promise<TGetResponse>;
};

export default class Cocktails implements ICocktails {

  api: IAPI;

  constructor(api: IAPI) {
    this.api = api;
  }

  _parseGetAll(items: $PropertyType<TCocktailsRaw, 'drinks'>): TCocktails {
    return items.map(({
      strDrink,
      strDrinkThumb,
      idDrink,
      // only avaiable when asking for cocktail details
      strInstructions,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
    }) => ({
      id: idDrink,
      image: strDrinkThumb,
      brief: strDrink,
      instructions: strInstructions,
      ingredients: [
        strMeasure1 || '',
        strMeasure2 || '',
        strMeasure3 || '',
        strMeasure4 || '',
        strMeasure5 || '',
        strMeasure6 || '',
        strMeasure7 || '',
        strMeasure8 || '',
        strMeasure9 || '',
        strMeasure10 || '',
        strMeasure11 || '',
        strMeasure12 || '',
        strMeasure13 || '',
        strMeasure14 || '',
        strMeasure15 || '',
      ].filter((str) => str.trim() !== ''),
      measures: [
        strIngredient1 || '',
        strIngredient2 || '',
        strIngredient3 || '',
        strIngredient4 || '',
        strIngredient5 || '',
        strIngredient6 || '',
        strIngredient7 || '',
        strIngredient8 || '',
        strIngredient9 || '',
        strIngredient10 || '',
        strIngredient11 || '',
        strIngredient12 || '',
        strIngredient13 || '',
        strIngredient14 || '',
        strIngredient15 || '',
      ].filter((str) => str.trim() !== ''),
    }));
  }

  async getAll(): Promise<TGetAllResponse> {
    try {
      const response: TCocktailsRaw | null = await this.api.fetch(
        this.api.getUrl(
          this.api.v1,
          'filter.php?g=Cocktail_glass'
        )
      );
      return response === null ? null : this._parseGetAll(response.drinks);
    } catch(e) {
      console.error('fail Cocktails.getAll()', e);
      return null;
    }
  }

  async get(id: string): Promise<TGetResponse> {
    try {
      const response: TCocktailsRaw | null = await this.api.fetch(
        this.api.getUrl(
          this.api.v1,
          `lookup.php?i=${id}`
        )
      );
      if(response === null) {
        return null;
      }
      // use same method as getAll
      const parsedResponse = this._parseGetAll(response.drinks);
      if(parsedResponse.length === 0) {
        return null;
      }
      return parsedResponse[0];
    } catch(e) {
      console.error('fail Cocktails.get()', e);
      return null;
    }
  }

}
