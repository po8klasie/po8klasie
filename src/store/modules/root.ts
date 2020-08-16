import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import schools, { fetchSchoolsEpic } from './schools';
import schoolDetails, {
  fetchSchoolClassesEpic,
  fetchSchoolDetailsEpic,
} from './schoolDetails';

export const rootEpic = combineEpics(
  fetchSchoolsEpic,
  fetchSchoolDetailsEpic,
  fetchSchoolClassesEpic,
);

export const rootReducer = combineReducers({
  schools,
  schoolDetails,
});

export type RootState = ReturnType<typeof rootReducer>;
