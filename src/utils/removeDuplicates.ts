import { School } from '../types';

export const removeDuplicates = (schools: School[]) =>
  schools.reduce((unique: School[], school) => {
    return unique.find(x => x.id === school.id) ? unique : [...unique, school];
  }, []);
