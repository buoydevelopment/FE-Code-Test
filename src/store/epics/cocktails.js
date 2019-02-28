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
  type TGetResponse,
} from '../../api/cocktails';

import {
  getAll,
  getAllStart,
  getAllSuccess,
  getAllFailure,
  getAllTryAgainBuffer,
  getAllTryAgain,

  get,
  getStart,
  getSuccess,
  getFailure,
  getTryAgainBuffer,
  getTryAgain,
} from '../actions/cocktails';

export const getAll$ = (
  action$: any,
  state: any,
  { cocktails, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(getAll.toString()),
    switchMap(({ meta: { failures }}) => {
      return merge(
        of(getAllStart()),
        fromPromise(cocktails.getAll())
          .pipe(
            switchMap((list: TGetAllResponse) => {
              return list === null ?
                _throw() :
                of(getAllSuccess({
                  list,
                  timestamp: now(),
                }))
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

export const get$ = (
  action$: any,
  state: any,
  { cocktails, now }: TDependencies,
) => {
  return action$.pipe(
    ofType(get.toString()),
    switchMap(({ payload: { id }, meta: { failures }}) => {
      return merge(
        of(getStart()),
        fromPromise(cocktails.get(id))
          .pipe(
            switchMap((item: TGetResponse) => {
              return item === null ?
                _throw() :
                of(getSuccess({
                  item,
                  timestamp: now(),
                }))
            }),
            catchError(() => {
              return failures === FAILURE_RETRY_COUNT ?
                of(
                  getFailure(),
                  getTryAgainBuffer({ id })
                ) :
                of(get({ id, failures: failures + 1 }))
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

export const getTryAgainBuffer$ = (
  action$: any,
) => {
  return action$.pipe(
    ofType(getTryAgainBuffer.toString()),
    buffer(
      action$.pipe(
        ofType(getTryAgain.toString())
      )
    ),
    map((buffer) => {
      return get({ id: buffer[buffer.length-1].id });
    })
  );
};

export default [
  getAll$,
  getAllTryAgainBuffer$,
  get$,
  getTryAgainBuffer$,
];
