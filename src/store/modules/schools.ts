import { ofType, Epic } from 'redux-observable';
import {
  expand,
  map,
  mergeMap,
  reduce,
  take,
  takeLast,
  takeWhile,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School, SearchParams } from '../../types';
import { EMPTY, from, Observable, of } from 'rxjs';
import { fetchSchoolDetailsSucceeded } from './schoolDetails';
import { getTotalPages } from '../../utils/pagination';

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOLS_SUCCEEDED';
const FETCH_MORE_SCHOOLS = 'FETCH_MORE_SCHOOLS';
const FETCH_MORE_SCHOOLS_SUCCEEDED = 'FETCH_MORE_SCHOOLS_SUCCEEDED';

type State = any;
// type State = {
//   schools: School[];
//   params: SearchParams;
//   isFetching: boolean;
// };

interface FetchSchoolsAction {
  type: typeof FETCH_SCHOOLS;
  payload: SearchParams;
}
interface FetchSchoolsSucceededAction {
  type: typeof FETCH_SCHOOLS_SUCCEEDED;
  payload: any;
}
interface FetchMoreSchoolsAction {
  type: string;
}

export const fetchSchools = (payload: SearchParams): FetchSchoolsAction => ({
  type: FETCH_SCHOOLS,
  payload,
});
export const fetchMoreSchools = (): FetchMoreSchoolsAction => ({
  type: FETCH_MORE_SCHOOLS,
});
export const fetchSchoolsSucceeded = (
  payload: any,
): FetchSchoolsSucceededAction => ({ type: FETCH_SCHOOLS_SUCCEEDED, payload });

type Actions = any;

const generateSchoolUrl = (params: any) => {
  const URLParams = new URLSearchParams();
  Object.entries({
    ...params,
    school_type_generalised: 'szkoła ponadpodstawowa',
  }).forEach(([key, value]) => {
    if (value) URLParams.set(key, value as any);
  });
  return `${process.env.REACT_APP_API_URL}/school/?${URLParams.toString()}`;
};

export const fetchSchoolsEpic: Epic<Actions, any, State> = (action$, state$) =>
  action$.pipe(
    ofType<Actions, any>(FETCH_SCHOOLS),
    mergeMap(action => {
      const paramsDiff =
        JSON.stringify(action.payload) === JSON.stringify(state$.value.params);

      return ajax.getJSON<any>(generateSchoolUrl(action.payload)).pipe(
        map(res => {
          const lastFetched =
            !paramsDiff && action.payload.page ? action.payload.page : 1;
          const results =
            state$.value.schools.results.length > 0 && !paramsDiff
              ? state$.value.schools.results
              : new Array(getTotalPages(res.count) + 1).fill([]);
          results[lastFetched] = res.results;
          return {
            type: FETCH_SCHOOLS_SUCCEEDED,
            payload: {
              ...res,
              results,
              lastFetched,
            },
          };
        }),
      );
    }),
  );
export const fetchMoreSchoolsEpic: Epic<Actions, any, State> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType<Actions, any>(FETCH_MORE_SCHOOLS),
    // mergeMap(action => {
    //
    // }),
  );

const initialState: State = {
  results: [],
  count: null,
  lastFetched: null,
  next: null,
  params: {
    school_name: '',
  },
  isFetching: false,
  reachedEnd: false,
};

const schools = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return {
        ...state,
        isFetching: true,
        params: {
          ...action.payload,
        },
      };

    case FETCH_SCHOOLS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        next: action.payload.next,
        previous: action.payload.previous,
        count: action.payload.count,
        lastFetched: action.payload.lastFetched,
        results: [...action.payload.results],
      };
    case FETCH_MORE_SCHOOLS:
      return {
        ...state,
        fetching: 'next',
      };

    default:
      return state;
  }
};

export default schools;
