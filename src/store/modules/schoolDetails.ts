import { ofType, Epic } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { School } from '../../types';

const FETCH_SCHOOL_DETAILS = 'FETCH_SCHOOL_DETAILS';
const FETCH_SCHOOL_DETAILS_SUCCEEDED = 'FETCH_SCHOOL_DETAILS_SUCCEEDED';

type State = {
  school: School | null;
  id: string | null;
  isFetching: boolean;
};

interface FetchSchoolDetailsAction {
  type: typeof FETCH_SCHOOL_DETAILS;
  payload: string;
}
interface FetchSchoolDetailsSucceededAction {
  type: typeof FETCH_SCHOOL_DETAILS_SUCCEEDED;
  payload: School;
}

export const fetchSchoolDetails = (
  payload: string,
): FetchSchoolDetailsAction => ({
  type: FETCH_SCHOOL_DETAILS,
  payload,
});
export const fetchSchoolDetailsSucceeded = (
  payload: School,
): FetchSchoolDetailsSucceededAction => ({
  type: FETCH_SCHOOL_DETAILS_SUCCEEDED,
  payload,
});

type Actions = FetchSchoolDetailsAction | FetchSchoolDetailsSucceededAction;

export const fetchSchoolDetailsEpic: Epic<
  Actions,
  FetchSchoolDetailsSucceededAction,
  State
> = action$ =>
  action$.pipe(
    ofType<Actions, FetchSchoolDetailsAction>(FETCH_SCHOOL_DETAILS),
    mergeMap(action =>
      ajax
        .getJSON<School[]>(
          `${process.env.REACT_APP_API_URL}/search/?name=${action.payload}`, // TODO: change name to school id
        )
        .pipe(map(response => fetchSchoolDetailsSucceeded(response[0]))),
    ),
  );

const initialState: State = {
  school: null,
  id: null,
  isFetching: false,
};

const schoolDetails = (state: State = initialState, action: Actions): State => {
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
        school: action.payload,
      };

    default:
      return state;
  }
};

export default schoolDetails;
