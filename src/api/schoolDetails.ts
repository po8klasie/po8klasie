import useSWR from 'swr';
import fetchData from './fetchData';

export const fetchSchoolDetails = (path: string): Promise<any> => {
  return fetchData(path).then((res) => res.results[0]);
};

export const useSchoolDetails = (schoolId: number): any => {
  return useSWR(`/school/?id=${schoolId}`, fetchSchoolDetails);
};
