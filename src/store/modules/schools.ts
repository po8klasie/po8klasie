import { ofType, Epic } from 'redux-observable';
import { expand, map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School } from '../../types';
import { getTotalPages } from '../../utils/pagination';
import { Params } from '../../utils/params';
import { State } from './root';
import {EMPTY, of} from 'rxjs';
import {areObjectsDifferent, removeFromObject, withoutPageAndView} from '../../utils/misc';
import {
  generateSchoolUrl,
  getPageNumberFromPaginationUrl,
} from '../../utils/urls';

export type SchoolsState = {
  results: School[];
  count: number | null;
  pageNo: number | null;
  params: Params;
  isFetching: boolean;
  fetchedAll: boolean;
};

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOLS_SUCCEEDED';

interface FetchSchoolsActionPayload {
  params: Params;
  fetchAll?: boolean;
}

interface FetchSchoolsAction {
  type: typeof FETCH_SCHOOLS;
  payload: FetchSchoolsActionPayload;
}

interface FetchSchoolsSucceededAction {
  type: typeof FETCH_SCHOOLS_SUCCEEDED;
  payload: any;
}

export const fetchSchools = (
  payload: FetchSchoolsActionPayload,
): FetchSchoolsAction => ({
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

export const fetchSchoolsEpic: Epic<Actions, any, State> = (action$, state$) =>
  action$.pipe(
    ofType<Actions, any>(FETCH_SCHOOLS),
    mergeMap(action => {
      const { payload } = action;
      const paramsWithoutViewDidChange = areObjectsDifferent(
          removeFromObject(state$.value.schools.params, ['view']),
          removeFromObject(payload.params, ['view'])
      );
      if(state$.value.schools.fetchedAll && !paramsWithoutViewDidChange)
        return of(fetchSchoolsSucceeded({
          isFetching: false,
          fetchedAll: true,
          count: state$.value.schools.count,
          pageNo: state$.value.schools.pageNo,
          params: state$.value.schools.params,
          results: state$.value.schools.results,
        }));
    console.log(removeFromObject(state$.value.schools.params, ['view']), removeFromObject(payload.params, ['view']),
      payload.fetchAll, paramsWithoutViewDidChange, !payload.page, payload);
      const requestUrl = generateSchoolUrl({
            ...payload.params,
            page: payload.fetchAll || (paramsWithoutViewDidChange && !payload.params.page) ? 1 : payload.params.page,
      });
      return ajax.getJSON<any>(requestUrl).pipe(
        expand(res =>
          payload.fetchAll && res.next ? ajax.getJSON<any>(res.next) : EMPTY,
        ),
        map((res: any) => {
          const pageNo = getPageNumberFromPaginationUrl(res.previous, res.next);
          const resultsFromState = state$.value.schools.results;
          const totalPages = getTotalPages(res.count) + 1;
          const didParamsChange = areObjectsDifferent(
              payload.params,
              state$.value.schools.params,
          );
          const results =
            resultsFromState.length > 0 && !didParamsChange
              ? resultsFromState
              : new Array(totalPages).fill([]); // create 2d array

          results[pageNo] = res.results;
          console.log(payload.fetchAll, pageNo, totalPages)
          return fetchSchoolsSucceeded({
            ...res,
            results,
            pageNo,
            params: payload.params,
            isFetching: payload.fetchAll ? (totalPages === 1 ? false : pageNo !== totalPages - 1) : false,
            fetchedAll: payload.fetchAll && pageNo === totalPages - 1
          });
        }),
      );
    }),
  );

const initialState: SchoolsState = {
  results: [],
  count: null,
  pageNo: null,
  fetchedAll: false,
  params: {},
  isFetching: false,
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
      };

    case FETCH_SCHOOLS_SUCCEEDED:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        fetchedAll: action.payload.fetchedAll,
        count: action.payload.count,
        pageNo: action.payload.pageNo,
        params: {
          ...action.payload.params,
        },
        results: [...action.payload.results],
      };

    default:
      return state;
  }
};

export default schools;
