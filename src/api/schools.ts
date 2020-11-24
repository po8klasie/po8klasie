import useSWR, { useSWRInfinite } from 'swr';
import { useEffect } from 'react';
import fetchData from './fetchData';
import { serializeSearchData } from '../utils/search';
import { getTotalPages, PER_PAGE } from '../utils/pagination';

export const fetchSchools = (path: string): Promise<{ count: number; schools: any[] }> => {
  return fetchData(path).then((res) => ({
    count: res.count,
    schools: res.results,
  }));
};

export const useSchools = (searchData: any) => {
  const params = serializeSearchData(searchData, 'api');
  return useSWR(`/school/?${params}`, fetchSchools);
};

export const useAllSchools = (searchData: any) => {
  const getKey = (pageIndex: number, prevRes: any) => {
    if (prevRes && !prevRes.next) return null;

    const params = serializeSearchData(
      {
        ...searchData,
        page: pageIndex + 1,
      },
      'api',
    );
    return `/school/?${params}`;
  };

  const { data, size, setSize, error } = useSWRInfinite(getKey, fetchData);

  const isTheOnlyRequest = data && data[0].count <= PER_PAGE;

  useEffect(() => {
    if (data && size && setSize && size === 1 && !isTheOnlyRequest) {
      setSize(getTotalPages(data[0].count));
    }
  }, [data, size, setSize, isTheOnlyRequest]);

  let fetchedData = null;

  if (data && size && (data.length === getTotalPages(data[0].count) || isTheOnlyRequest))
    fetchedData = data.map((res) => res.results).flat();

  return {
    data: fetchedData,
    error,
  };
};
