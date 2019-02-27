// @flow

import {
  type IAPI,
} from './index';

export type TCocktail = {
  id: string,
  image: string,
  brief: string,
};

export type TCocktails = Array<TCocktail>;

type TCocktailRaw = {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string,
};
type TCocktailsRaw = {
  drinks: Array<TCocktailRaw>
};

export type TGetAllResponse = TCocktails | null;

export interface ICocktails {
  +constructor: (IAPI) => any;
  +getAll: () => Promise<TGetAllResponse>;
};

export default class Cocktails implements ICocktails {

  api: IAPI;

  constructor(api: IAPI) {
    this.api = api;
  }

  _parseGetAll(items: $PropertyType<TCocktailsRaw, 'drinks'>): TCocktails {
    return items.map(({ strDrink, strDrinkThumb, idDrink }) => ({
      id: idDrink,
      image: strDrinkThumb,
      brief: strDrink,
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

}
