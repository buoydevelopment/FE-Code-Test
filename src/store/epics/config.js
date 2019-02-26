// @flow

import { ofType } from 'redux-observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { merge } from 'rxjs/observable/merge';
import {
  switchMap,
  map,
  catchError,
  takeUntil,
  delay,
  buffer,
  tap,
} from 'rxjs/operators';

import {
  type TDependencies,
} from '../index';

import {
  loaded,
  loadedSuccess,
} from '../actions/config';

export const loaded$ = (
  action$: any,
  state: any,
  { now }: TDependencies,
) => {
  return action$.pipe(
    ofType(loaded.toString()),
    switchMap(() => {
      return of(
        loadedSuccess({ timestamp: now() })
      );
    })
  );
};

export default [
  loaded$,
];
