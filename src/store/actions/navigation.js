// @flow

import { createActions } from 'redux-actions';

import { type TScreens } from '../../navigation';

export * from '../../navigation';

export type TDispatchers = {
  toggleDrawer: () => any,
  pop: () => any,
  popToRoot: () => any,
  push: (screenName: TScreens, passProps?: Object) => any,
};

export type TPayloads = {
  push: { screenName: TScreens, passProps?: Object },
};

export const {
  navigation: {
    overwriteBackButtonHandler,
    overwritedBackButtonHandler,
    toggleDrawer,
    toggledDrawer,
    pop,
    popped,
    popToRoot,
    poppedToRoot,
    push,
    pushed,
  },
} = createActions({
  NAVIGATION: {
    OVERWRITE_BACK_BUTTON_HANDLER: undefined,
    OVERWRITED_BACK_BUTTON_HANDLER: undefined,
    TOGGLE_DRAWER: undefined,
    TOGGLED_DRAWER: undefined,
    POP: undefined,
    POPPED: undefined,
    POP_TO_ROOT: undefined,
    POPPED_TO_ROOT: undefined,
    PUSH: (screenName: TScreens, passProps?: Object) => ({
      screenName,
      passProps,
    }),
    PUSHED: undefined,
  },
});
