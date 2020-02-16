import { ofType, Epic } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School, SearchParams } from '../../types';

const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const FETCH_SCHOOLS_SUCCEEDED = 'FETCH_SCHOOL_SUCCEEDED';

type State = {
  schools: School[];
  params: SearchParams;
  isFetching: boolean;
};

interface FetchSchoolsAction {
  type: typeof FETCH_SCHOOLS;
  payload: SearchParams;
}
interface FetchSchoolsSucceededAction {
  type: typeof FETCH_SCHOOLS_SUCCEEDED;
  payload: School[];
}

export const fetchSchools = (payload: SearchParams): FetchSchoolsAction => ({
  type: FETCH_SCHOOLS,
  payload,
});
export const fetchSchoolsSucceeded = (
  payload: School[],
): FetchSchoolsSucceededAction => ({ type: FETCH_SCHOOLS_SUCCEEDED, payload });

type Actions = FetchSchoolsAction | FetchSchoolsSucceededAction;

export const fetchSchoolsEpic: Epic<
  Actions,
  FetchSchoolsSucceededAction,
  State
> = action$ =>
  action$.pipe(
    ofType<Actions, FetchSchoolsAction>(FETCH_SCHOOLS),
    mergeMap(action => {
      const URLParams = new URLSearchParams();
      Object.entries(action.payload).forEach(([key, value]) => {
        if (value) URLParams.set(key, value);
      });
      return ajax
        .getJSON<School[]>(
          `${process.env.REACT_APP_API_URL}/search/?${URLParams.toString()}`,
        )
        .pipe(map(response => fetchSchoolsSucceeded(response)));
    }),
  );

const initialState: State = {
  schools: [],
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
        schools: action.payload,
      };

    default:
      return state;
  }
};

export default schools;
