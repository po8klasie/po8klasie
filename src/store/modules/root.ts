import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import schools, {fetchSchoolsEpic} from './schools';
import schoolDetails, { fetchSchoolDetailsEpic } from './schoolDetails';

export const rootEpic = combineEpics(
    fetchSchoolsEpic,
    fetchSchoolDetailsEpic);

export const rootReducer = combineReducers({
  schools,
  schoolDetails,
});
