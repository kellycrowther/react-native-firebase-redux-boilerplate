import 'rxjs';
import {combineEpics} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {mergeMap, takeUntil, map, retry, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {RacesActions, getRaceByIdFailure, getRaceByIdSuccess} from '../actions';
import config from '../../config';

const endpoint = config.API_ENDPOINT;

export const getRace = actions$ => {
  return actions$.pipe(
    ofType(RacesActions.GET_RACE_BY_ID),
    mergeMap(action => {
      const id = action.payload.id;
      return ajax({
        url: `${endpoint}/races/${id}`,
        method: 'GET',
      }).pipe(
        map(races => getRaceByIdSuccess(races.response)),
        takeUntil(actions$.ofType(RacesActions.GET_RACE_BY_ID_SUCCESS)),
        retry(2),
        catchError(error => of(getRaceByIdFailure())),
      );
    }),
  );
};

export default combineEpics(getRace);
