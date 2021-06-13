import subjectNames from '../subjectNames';
import { IExtendedSubjectName } from '../../types/graphql';

describe('data/subjectNames', () => {
  it('covers whole list of subjects returned from the API', () => {
    const abbreviations = Object.keys(subjectNames);
    expect(abbreviations).toEqual(Object.values(IExtendedSubjectName));
  });
});
