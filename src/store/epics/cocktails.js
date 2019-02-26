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
  delay,
  buffer,
  tap,
} from 'rxjs/operators';

import {
  FAILURE_RETRY_COUNT,
  FAILURE_RETRY_TIME
} from './constants';

import {
  type TDependencies,
} from '../index';

import {
  type TGetAllResponse,
} from '../../api/cocktails';

import {
  getAll,
  getAllStart,
  getAllSuccess,
  getAllFailure,
  getAllTryAgainBuffer,
  getAllTryAgain,
} from '../actions/cocktails';

export const getAll$ = (
  action$: any,
  state: any,
  { cocktails }: TDependencies,
) => {
  return action$.pipe(
    ofType(getAll.toString()),
    switchMap(({ meta: { failures }}) => {
      return merge(
        of(getAllStart()),
        fromPromise(cocktails.getAll())
          .pipe(
            switchMap((response: TGetAllResponse) => {
              return response === null ?
                _throw() :
                of(getAllSuccess({ newId: response }))
            }),
            catchError(() => {
              return failures === FAILURE_RETRY_COUNT ?
                of(
                  getAllFailure(),
                  getAllTryAgainBuffer()
                ) :
                of(getAll({ failures: failures + 1 }))
                  .pipe(
                    delay(FAILURE_RETRY_TIME)
                  )
            })
            // TODO: add on abort ??
          )
      );
    })
  );
};

export const getAllTryAgainBuffer$ = (
  action$: any,
) => {
  return action$.pipe(
    ofType(getAllTryAgainBuffer.toString()),
    buffer(
      action$.pipe(
        ofType(getAllTryAgain.toString())
      )
    ),
    map(() => {
      return getAll();
    })
  );
};

export default [
  getAll$,
  getAllTryAgainBuffer$,
];
