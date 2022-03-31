import useSWR from 'swr';
import qs, { StringifiableRecord } from 'query-string';
import fetcher from './fetcher';
import { RailsApiSchool } from '../../types';

interface RailsApiSchoolsDataResponse {
  results: RailsApiSchool[];
  totalItems: number;
  page: number;
}

const useSchoolsData = (filtersValues: StringifiableRecord, defaultQuery: StringifiableRecord) => {
  const endpointUrl = qs.stringifyUrl(
    {
      url: '/api/external/institutions',
      query: {
        ...filtersValues,
        ...defaultQuery,
      },
    },
    { skipEmptyString: true, arrayFormat: 'comma' },
  );

  return useSWR(endpointUrl, (key) => fetcher<RailsApiSchoolsDataResponse>(key));
};

export default useSchoolsData;
