import useSWR from 'swr';
import fetchData from './fetchData';

const fixBounds = (classes: any[]) =>
  classes.map((c: any) => {
    if (typeof c.year !== 'string' || typeof c.year === 'undefined') return c;
    return {
      ...c,
      year: JSON.parse(c.year),
    };
  });

export const fetchHighSchoolClasses = (path: string) => {
  return fetchData(path).then((res) => fixBounds(res.results));
};

export const useHighSchoolClasses = (schoolId: number, schoolType = 'liceum ogólnokształcące') => {
  const getPath = () => {
    if (schoolType === 'liceum ogólnokształcące') return `/highschool/class/?school=${schoolId}`;

    return null;
  };
  return useSWR(getPath, fetchHighSchoolClasses);
};
