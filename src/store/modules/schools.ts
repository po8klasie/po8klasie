import { ofType, Epic } from 'redux-observable';
import { expand, map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School, SearchData } from '../../types';
import { getTotalPages } from '../../utils/pagination';
import { Params } from '../../utils/params';
import { State } from './root';
import { EMPTY, of } from 'rxjs';
import {
  areObjectsDifferent,
  areObjectsDifferentWithout,
  removeFromObject,
  withoutPageAndView,
} from '../../utils/misc';
import {
  generateSchoolUrl,
  getPageNumberFromPaginationUrl,
} from '../../utils/urls';
import {
  generateResults,
  getPayloadFromState,
  getResetedSearchDataProperties,
} from '../../utils/schoolsModuleUtils';
import { searchControllersConfigs } from '../../data/searchControllers';
import { getSearchViewById } from '../../utils/searchViews';

export type SchoolsState = {
  results: School[][];
  searchData: SearchData;
  responseData: {
    count: number | null;
  };
  fetchingData: {
    isFetching: boolean;
    fetchedAll: boolean;
  };
};

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOLS_SUCCEEDED';

interface FetchSchoolsActionPayload {
  searchData: SearchData;
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
      const {
        payload: { searchData },
      } = action;
      const { schools } = state$.value;

      // return value from state if params hasn't changed
      const searchDataDidChange = areObjectsDifferentWithout(
        state$.value.schools.searchData,
        searchData,
        ['page'],
      );
      if (
        !searchDataDidChange &&
        (schools.fetchingData.fetchedAll ||
          (schools.results[searchData.page] &&
            schools.results[searchData.page].length > 0))
      )
        return of(fetchSchoolsSucceeded(getPayloadFromState(state$.value)));

      const freshSearchData = areObjectsDifferentWithout(
        state$.value.schools.searchData,
        searchData,
        ['page'],
      )
        ? getResetedSearchDataProperties(searchData)
        : searchData;
      if (state$.value.schools.searchData.view !== searchData.view)
        freshSearchData.ordering = null;

      const layoutSettings = getSearchViewById(freshSearchData.view).layout;
      const fetchAll = !layoutSettings || !layoutSettings.enablePagination;
      const requestUrl = generateSchoolUrl(freshSearchData);

      return ajax.getJSON<any>(requestUrl).pipe(
        expand(res =>
          fetchAll && res.next ? ajax.getJSON<any>(res.next) : EMPTY,
        ),
        map((res: any) => {
          const pageNo = getPageNumberFromPaginationUrl(res.previous, res.next);
          const resultsFromState = state$.value.schools.results;
          const totalPages = getTotalPages(res.count) + 1;

          const results =
            resultsFromState.length > 0 && searchDataDidChange
              ? resultsFromState
              : new Array(totalPages).fill([]); // create 2d array

          results[pageNo] = res.results;

          const fetchedAll = fetchAll && pageNo === totalPages - 1;
          let isFetching = false;

          if (fetchAll && totalPages > 1)
            isFetching = pageNo !== totalPages - 1;

          return fetchSchoolsSucceeded({
            results,
            responseData: {
              count: res.count,
            },
            searchData: freshSearchData,
            fetchingData: {
              isFetching,
              fetchedAll,
            },
          });
        }),
      );
    }),
  );

const initialState: SchoolsState = {
  results: [],
  searchData: Object.fromEntries(
    Object.entries(searchControllersConfigs).map(([key, config]) => [
      key,
      config.defaultValue,
    ]),
  ),
  responseData: {
    count: null,
  },
  fetchingData: {
    isFetching: false,
    fetchedAll: false,
  },
};

const schools = (
  state: SchoolsState = initialState,
  action: Actions,
): SchoolsState => {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return {
        ...state,
        fetchingData: {
          isFetching: false,
          fetchedAll: false,
        },
      };

    case FETCH_SCHOOLS_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default schools;
