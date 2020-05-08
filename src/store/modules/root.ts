import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import schools, { fetchSchoolsEpic, SchoolsState } from './schools';
import schoolDetails, {
  fetchSchoolClassesEpic,
  fetchSchoolDetailsEpic,
} from './schoolDetails';

export type State = {
  schools: SchoolsState;
};

export const rootEpic = combineEpics(
  fetchSchoolsEpic,
  fetchSchoolDetailsEpic,
  fetchSchoolClassesEpic,
);

export const rootReducer = combineReducers({
  schools,
  schoolDetails,
});
