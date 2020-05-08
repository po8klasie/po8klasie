import { ofType, Epic } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School } from '../../types';
import { getTotalPages } from '../../utils/pagination';
import { Params, toParams } from '../../utils/params';
import { State } from './root';

export type SchoolsState = {
  results: School[];
  count: number | null;
  lastFetched: number | null;
  next: number | null;
  previous: number | null;
  params: Params;
  isFetching: boolean;
  reachedEnd: boolean;
};

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOLS_SUCCEEDED';

interface FetchSchoolsAction {
  type: typeof FETCH_SCHOOLS;
  payload: Params;
}

interface FetchSchoolsSucceededAction {
  type: typeof FETCH_SCHOOLS_SUCCEEDED;
  payload: any;
}

export const fetchSchools = (payload: Params): FetchSchoolsAction => ({
  type: FETCH_SCHOOLS,
  payload,
});

export const fetchSchoolsSucceeded = (
  payload: any,
): FetchSchoolsSucceededAction => ({
  type: FETCH_SCHOOLS_SUCCEEDED,
  payload,
});

type Actions = FetchSchoolsAction | FetchSchoolsSucceededAction;

const generateSchoolUrl = (params: Params) => {
  const paramsStr = toParams(
    {
      ...params,
      school_type_generalised: 'szkoła ponadpodstawowa',
    },
    'api',
  );
  return `${process.env.REACT_APP_API_URL}/school/?${paramsStr}`;
};

export const fetchSchoolsEpic: Epic<Actions, any, State> = (action$, state$) =>
  action$.pipe(
    ofType<Actions, any>(FETCH_SCHOOLS),
    mergeMap(action => {
      const paramsDiff =
        JSON.stringify(action.payload) !==
        JSON.stringify(state$.value.schools.params);

      return ajax.getJSON<any>(generateSchoolUrl(action.payload)).pipe(
        map(res => {
          const lastFetched =
            !paramsDiff && action.payload.page ? action.payload.page : 1;
          const results =
            state$.value.schools.results.length > 0 && paramsDiff
              ? state$.value.schools.results
              : new Array(getTotalPages(res.count) + 1).fill([]);
          results[lastFetched] = res.results;
          return fetchSchoolsSucceeded({
            ...res,
            results,
            lastFetched,
          });
        }),
      );
    }),
  );

const initialState: SchoolsState = {
  results: [],
  count: null,
  lastFetched: null,
  next: null,
  previous: null,
  params: {},
  isFetching: false,
  reachedEnd: false,
};

const schools = (
  state: SchoolsState = initialState,
  action: Actions,
): SchoolsState => {
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

    default:
      return state;
  }
};

export default schools;
