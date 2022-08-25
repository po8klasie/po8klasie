import useSWR from 'swr';
import qs, { StringifiableRecord } from 'query-string';
import fetcher from './fetcher';
import { ISchoolData } from "../../types";

interface SchoolsDataResponse {
  items: ISchoolData[];
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

  return useSWR(endpointUrl, (key) => fetcher<SchoolsDataResponse>(key));
};

export default useSchoolsData;
