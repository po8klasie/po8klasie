import qs, { StringifiableRecord } from 'query-string';
import { ISchoolData } from '../types';
import { useQuery } from '@tanstack/react-query';

interface SchoolsDataResponse {
  items: ISchoolData[];
}

const useSchoolsData = (filtersValues: StringifiableRecord, defaultQuery: StringifiableRecord) => {
  const endpointUrl = qs.stringifyUrl(
    {
      url: '/institution/',
      query: {
        ...filtersValues,
        ...defaultQuery,
      },
    },
    { skipEmptyString: true },
  );

  return useQuery<SchoolsDataResponse>([endpointUrl]);
};

export default useSchoolsData;
