// @flow

import {
  type IAPI,
} from './index';

export type TCocktail = Object;

export type TCocktails = Array<TCocktail>;

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

  async getAll(): Promise<TGetAllResponse> {
    try {
      const response = await this.api.fetch(
        this.api.getUrl(
          this.api.v1,
          'filter.php?g=Cocktail_glass'
        )
      );
      return response === null ? null : response;
    } catch(e) {
      console.error('fail Cocktails.getAll()', e);
      return null;
    }
  }

}
