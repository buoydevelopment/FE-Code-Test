// @flow

import { handleActions } from 'redux-actions';

import {
  getAllSuccess,
  getSuccess,
  toggleFavorite,
  type TPayloads,
} from '../actions/cocktails';

import {
  type TCocktail,
} from '../../api/cocktails';

export type TStore = {
  byId: {[string]: TCocktail},
  allIds: Array<string>,
  // store here cocktails id to know it they
  // are fully loaded, needed when display cocktail details
  fullyLoadedItems: Array<string>,
  itemsAsFavorite: {[string]: bool},
  getAllTimestamp: number,
  getTimestamp: number,
};

export const initialState: TStore = {
  byId: {},
  allIds: [],
  fullyLoadedItems: [],
  itemsAsFavorite: {},
  getAllTimestamp: 0,
  getTimestamp: 0,
};

export const reducer = handleActions<
  TStore,
  | getAllSuccess
  | getSuccess
  | toggleFavorite
>
({
  [getAllSuccess]: (
    state: TStore,
    { payload: { list, timestamp } }: { payload: $PropertyType<TPayloads, 'getAllSuccess'> }
  ): TStore => {
    return {
      ...state,
      byId: list.reduce((acc, cur) => ({
        ...acc,
        [cur.id]: {
          ...cur,
        },
      }), {}),
      itemsAsFavorite: list.reduce((acc, cur) => ({
        ...acc,
        [cur.id]: false,
      }), {}),
      allIds: list.map(({ id }) => id),
      getAllTimestamp: timestamp,
    };
  },

  [getSuccess]: (
    state: TStore,
    { payload: { item, timestamp } }: { payload: $PropertyType<TPayloads, 'getSuccess'> }
  ): TStore => {
    const { id } = item;
    const { allIds, fullyLoadedItems } = state;
    return {
      ...state,
      byId: {
        ...state.byId,
        // owerwrite
        [id]: {
          ...item,
        },
      },
      // dont add it twice
      allIds: allIds.includes(id) ? allIds : [ ...allIds, id ],
      // dont add it twice
      fullyLoadedItems: fullyLoadedItems.includes(id) ? fullyLoadedItems : [ ...fullyLoadedItems, id ],
      getTimestamp: timestamp,
    };
  },

  [toggleFavorite]: (
    state: TStore,
    { payload: { id } }: { payload: $PropertyType<TPayloads, 'toggleFavorite'> }
  ): TStore => {
    const {
      itemsAsFavorite,
    } = state;
    if(!(id in state.byId) || !(id in itemsAsFavorite)) {
      return state;
    }
    return {
      ...state,
      itemsAsFavorite: {
        ...itemsAsFavorite,
        [id]: !itemsAsFavorite[id],
      },
    };
  },
  
}, initialState);
