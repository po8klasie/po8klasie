import useSWR from 'swr';
import fetchData from './fetchData';

export const fetchSchoolDetails = (path: string) => {
  return fetchData(path).then((res) => res.results[0]);
};

export const useSchoolDetails = (schoolId: number) => {
  return useSWR(`/school/?id=${schoolId}`, fetchSchoolDetails);
};
