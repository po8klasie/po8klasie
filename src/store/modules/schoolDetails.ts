import { ofType, Epic } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { School } from '../../types';
import { transformArr } from '../../utils/transformArr';

const FETCH_SCHOOL_DETAILS = 'FETCH_SCHOOL_DETAILS';
const FETCH_SCHOOL_DETAILS_SUCCEEDED = 'FETCH_SCHOOL_DETAILS_SUCCEEDED';

const FETCH_SCHOOL_CLASSES_SUCCEEDED = 'FETCH_SCHOOL_CLASSES_SUCCEEDED';

type SchoolDetailsState = {
  school:
    | {}
    | {
        [key: string]: School;
      };
  classes:
    | {}
    | {
        [key: string]: School;
      };
  // ids:   id: number | null;
  isFetching: boolean;
};

interface FetchSchoolDetailsAction {
  type: typeof FETCH_SCHOOL_DETAILS;
  payload: number[];
}
interface FetchSchoolDetailsSucceededAction {
  type: typeof FETCH_SCHOOL_DETAILS_SUCCEEDED;
  payload: {
    [key: string]: {
      school: School;
    };
  };
}

interface FetchSchoolClassesSucceededAction {
  type: typeof FETCH_SCHOOL_CLASSES_SUCCEEDED;
  payload: any;
}

export const fetchSchoolDetails = (
  payload: number[],
): FetchSchoolDetailsAction => ({
  type: FETCH_SCHOOL_DETAILS,
  payload,
});

export const fetchSchoolDetailsSucceeded = (payload: {
  [key: string]: {
    school: School;
  };
}): FetchSchoolDetailsSucceededAction => ({
  type: FETCH_SCHOOL_DETAILS_SUCCEEDED,
  payload,
});

export const fetchSchoolClassesSucceeded = (
  payload: any,
): FetchSchoolClassesSucceededAction => ({
  type: FETCH_SCHOOL_CLASSES_SUCCEEDED,
  payload,
});

type Actions =
  | FetchSchoolDetailsAction
  | FetchSchoolDetailsSucceededAction
  | FetchSchoolClassesSucceededAction;

const isHighSchool = (school: School) =>
  school.school_type === 'liceum ogólnokształcące';

const fixBounds = (classes: any[]) =>
  classes.map((c: any) => {
    if (typeof c.year !== 'string' || typeof c.year === 'undefined') return c;
    return {
      ...c,
      year: JSON.parse(c.year),
    };
  });

export const fetchSchoolDetailsEpic: Epic<Actions, any, SchoolDetailsState> = (
  action$,
) =>
  action$.pipe(
    ofType<Actions, FetchSchoolDetailsAction>(FETCH_SCHOOL_DETAILS),

    mergeMap((action) => {
      const params = transformArr(action.payload, 'api');

      return ajax
        .getJSON<any>(`${process.env.REACT_APP_API_URL}/school/?id=${params}`)
        .pipe(
          map((res) => {
            const result = res.results.reduce(
              (resultsObj: object, schoolResult: School) => {
                return {
                  ...resultsObj,
                  [schoolResult.id]: { ...schoolResult },
                };
              },
              {},
            );
            return fetchSchoolDetailsSucceeded(result);
          }),
        );
    }),
  );

export const fetchSchoolClassesEpic: Epic<Actions, any, SchoolDetailsState> = (
  action$,
) =>
  action$.pipe(
    ofType<Actions, any>(FETCH_SCHOOL_DETAILS_SUCCEEDED),
    mergeMap((action: any) => {
      const ids = Object.keys(action.payload).map((key: string) => Number(key));

      const onlyHighSchoolIds = ids.filter(
        (id: number) =>
          action.payload[id].school_type === 'liceum ogólnokształcące',
      );
      if (!onlyHighSchoolIds.length) return of(fetchSchoolClassesSucceeded({}));

      const params = transformArr(onlyHighSchoolIds, 'api');
      return ajax
        .getJSON<any>(
          `${process.env.REACT_APP_API_URL}/highschool/class/?school=${params}`,
        )
        .pipe(
          map((res) => {
            const allClasses = fixBounds(res.results);

            //tutaj trzeba zrobić filtrowanie klas przez szkoły, kiedy będzie już zwracane ID szkoły; poniższe rozwiązanie zadziała tylko przy jednej szkole

            const result = ids.reduce((resultsObj: object, id: number) => {
              return {
                ...resultsObj,
                [id]: allClasses,
              };
            }, {});

            return fetchSchoolClassesSucceeded(result);
          }),
        );
    }),
  );

const initialState: SchoolDetailsState = {
  school: {},
  classes: {},
  // id: null,
  isFetching: false,
};

const schools = (
  state: SchoolDetailsState = initialState,
  action: Actions,
): SchoolDetailsState => {
  switch (action.type) {
    case FETCH_SCHOOL_DETAILS:
      return {
        ...state,
        isFetching: true,
        // id: action.payload,
      };

    case FETCH_SCHOOL_DETAILS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        school: action.payload,
      };

    case FETCH_SCHOOL_CLASSES_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        classes: action.payload,
      };

    default:
      return state;
  }
};

export default schools;
