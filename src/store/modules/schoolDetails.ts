import { ofType, Epic } from 'redux-observable';
import {expand, map, mergeMap, reduce} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School, SearchParams } from '../../types';
import {EMPTY} from "rxjs";

const FETCH_SCHOOL_DETAILS = 'FETCH_SCHOOL_DETAILS';
const FETCH_SCHOOL_DETAILS_SUCCEEDED = 'FETCH_SCHOOL_DETAILS_SUCCEEDED';

type State = any;
// type State = {
//   schools: School[];
//   params: SearchParams;
//   isFetching: boolean;
// };

interface FetchSchoolDetailsAction {
  type: typeof FETCH_SCHOOL_DETAILS;
  payload: number;
}
interface FetchSchoolDetailsSucceededAction {
  type: typeof FETCH_SCHOOL_DETAILS_SUCCEEDED;
  payload: any;
}

export const fetchSchoolDetails = (payload: number): FetchSchoolDetailsAction => ({
  type: FETCH_SCHOOL_DETAILS,
  payload,
});
export const fetchSchoolDetailsSucceeded = (
    payload: any,
): FetchSchoolDetailsSucceededAction => ({ type: FETCH_SCHOOL_DETAILS_SUCCEEDED, payload });

type Actions = FetchSchoolDetailsAction | FetchSchoolDetailsSucceededAction;

export const fetchSchoolDetailsEpic: Epic<
    Actions,
    any,
    State
    > = action$ =>
    action$.pipe(
        ofType<Actions, FetchSchoolDetailsAction>(FETCH_SCHOOL_DETAILS),

        mergeMap(action => {
          return ajax
              .getJSON<any>(
                  `${process.env.REACT_APP_API_URL}/school/?id=${Number(action.payload).toString()}`,
              ).pipe(
                  map(res => fetchSchoolDetailsSucceeded(res.results[0]))
              );
        }),
    );

const initialState: State = {
  result: {},
  id: null,
  isFetching: false,
};

const schools = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case FETCH_SCHOOL_DETAILS:
      return {
        ...state,
        isFetching: true,
        id: action.payload,
      };

    case FETCH_SCHOOL_DETAILS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        result: action.payload,
      };

    default:
      return state;
  }
};

export default schools;
