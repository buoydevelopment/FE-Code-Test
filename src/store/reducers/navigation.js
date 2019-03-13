// @flow

import { handleActions } from 'redux-actions';

import {
  toggleDrawer,
  pop,
  popToRoot,
  push,
  type TScreens,
  type TPayloads,
} from '../actions/navigation';

export type TActions =
  | 'NONE'
  | 'TOGGLE_DRAWER'
  | 'POP'
  | 'POP_TO_ROOT'
  | 'PUSH'
;

export type TStore = {
  action: TActions,
  history: Array<{
    screenName: TScreens,
    passProps?: Object
  }>,
  length: number,
  screenName: TScreens,
};

export const initialState: TStore = {
  action: 'NONE',
  history: [ { screenName: 'Buoy.Cocktails' } ],
  length: 0,
  screenName: 'Buoy.Cocktails',
};

export const reducer = handleActions<
  TStore,
  | toggleDrawer
  | pop
  | popToRoot
  | push
>({

  [toggleDrawer]: (
    state: TStore
  ): TStore => {
    return {
      ...state,
      action: 'TOGGLE_DRAWER',
    };
  },

  [pop]: (
    state: TStore
  ): TStore => {
    console.log('reducer: pop', state.history, state.length);
    const { history } = state;
    const { screenName } = history[history.length - 2];
    return {
      ...state,
      action: 'POP',
      history: history.slice(0, history.length - 1),
      length: state.length - 1,
      screenName,
    };
  },

  [popToRoot]: (
    state: TStore
  ): TStore => {
    console.log('reducer: popToRoot', state.history, state.length);
    const { history } = state;
    return {
      ...state,
      action: 'POP_TO_ROOT',
      history: [ history[0] ],
      length: 0,
      screenName: 'Buoy.Cocktails',
    };
  },

  [push]: (
      state: TStore,
    { payload: { screenName, passProps } }: { payload: $PropertyType<TPayloads, 'push'> }
  ): TStore => {
    console.log('reducer: push', state.history, state.length);
    return {
      ...state,
      action: 'PUSH',
      history: [
        ...state.history,
        {
          screenName,
          passProps,
        },
      ],
      length: state.length + 1,
      screenName,
    };
  },

}, initialState);
