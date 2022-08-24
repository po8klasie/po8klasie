import useSWR from 'swr';
import qs, { StringifiableRecord } from 'query-string';
import fetcher from './fetcher';
import { RailsApiSchool } from '../../types';

interface RailsApiSchoolsDataResponse {
  items: RailsApiSchool[];
  total: number;
  page: number;
}

const useSchoolsData = (filtersValues: StringifiableRecord, defaultQuery: StringifiableRecord) => {
  const endpointUrl = qs.stringifyUrl(
    {
      url: '/facility/',
      query: {
        ...filtersValues,
        ...defaultQuery,
      },
    },
    { skipEmptyString: true },
  );

  return useSWR(endpointUrl, (key) => fetcher<RailsApiSchoolsDataResponse>(key));
};

export default useSchoolsData;
