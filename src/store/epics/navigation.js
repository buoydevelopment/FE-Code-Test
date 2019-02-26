// @flow

import { ofType } from 'redux-observable';

import {
  tap,
  map,
} from 'rxjs/operators';

import {
  type TDependencies,
} from '../index';

import {
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
} from '../actions/navigation';

export const overwriteBackButtonHandler$ = (
  action$: any,
  state: any,
  { navigation, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(overwriteBackButtonHandler.toString()),
    tap(() => navigation.setBackButtonHandler()),
    map(() => overwritedBackButtonHandler())
  );
};

export const toggleDrawer$ = (
  action$: any,
  state: any,
  { navigation, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(toggleDrawer.toString()),
    tap(() => navigation.toggleDrawer()),
    map(() => toggledDrawer({ timestamp: now() }))
  );
};

export const pop$ = (
  action$: any,
  state: any,
  { navigation, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(pop.toString()),
    tap(() => navigation.pop()),
    map(() => popped({ timestamp: now() }))
  );
};

export const popToRoot$ = (
  action$: any,
  state: any,
  { navigation, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(popToRoot.toString()),
    tap(() => navigation.popToRoot()),
    map(() => poppedToRoot({ timestamp: now() }))
  );
};

export const push$ = (
  action$: any,
  state: any,
  { navigation, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(push.toString()),
    tap(({ payload: { screenName, passProps } }) =>
      navigation.push(screenName, passProps)
    ),
    map(() => pushed({ timestamp: now() }))
  );
};

export default [
  overwriteBackButtonHandler$,
  toggleDrawer$,
  pop$,
  popToRoot$,
  push$,
];
