import { ofType, Epic } from 'redux-observable';
import {expand, map, mergeMap, reduce} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School, SearchParams } from '../../types';
import {EMPTY} from "rxjs";
import {fetchSchoolDetailsSucceeded} from "./schoolDetails";

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOL_SUCCEEDED';

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

export const fetchSchools = (payload: SearchParams): FetchSchoolsAction => ({
  type: FETCH_SCHOOLS,
  payload,
});
export const fetchSchoolsSucceeded = (
  payload: any,
): FetchSchoolsSucceededAction => ({ type: FETCH_SCHOOLS_SUCCEEDED, payload });

type Actions = FetchSchoolsAction | FetchSchoolsSucceededAction;

export const fetchSchoolsEpic: Epic<
  Actions,
  any,
  State
> = action$ =>
  action$.pipe(
    ofType<Actions, FetchSchoolsAction>(FETCH_SCHOOLS),
    mergeMap(action => {
      const URLParams = new URLSearchParams();
      Object.entries({
        ...action.payload,
        school_type_generalised: 'szkoła ponadpodstawowa'
      }).forEach(([key, value]) => {
        if (value) URLParams.set(key, value);
      });
      return ajax
        .getJSON<any>(
          `${process.env.REACT_APP_API_URL}/highschool/?${URLParams.toString()}`,
        ).pipe(
            expand((res) => res.next ? ajax.getJSON<any>(res.next) : EMPTY),
            reduce((acc, res) => acc.concat(res.results), []),
            map(results => fetchSchoolsSucceeded(results))
        );
    }),
  );

const initialState: State = {
  results: [],
  params: {
    name: '',
  },
  isFetching: false,
};

const schools = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return {
        ...state,
        isFetching: true,
        params: action.payload,
      };

    case FETCH_SCHOOLS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        results: [...action.payload],
      };

    default:
      return state;
  }
};

export default schools;
