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
  changeApi,
  changedApi,
  loaded,
  loadedSuccess,
} from '../actions/config';

export const changeApi$ = (
  action$: any,
  state: any,
  { api, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(changeApi.toString()),
    tap(({ payload: { host, port, version } }) => api.change(
      host,
      port,
      version
    )),
    switchMap(() => {
      return of(
        changedApi({ timestamp: now() })
      );
    })
  );
};

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
  changeApi$,
  loaded$,
];
