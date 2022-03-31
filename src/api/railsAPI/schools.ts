import useSWR from 'swr';
import qs, { StringifiableRecord } from 'query-string';
import { isPlainObject, camelCase } from 'lodash';

const camelCaseKeys = (o: Record<string, unknown>): Record<string, unknown> | unknown[] => {
  if (isPlainObject(o)) {
    const n: Record<string, unknown> = {};

    Object.keys(o).forEach((k) => {
      n[camelCase(k)] = camelCaseKeys(o[k] as Record<string, unknown>);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => camelCaseKeys(i));
  }

  return o;
};

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then(camelCaseKeys);

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

  return useSWR(endpointUrl, fetcher);
};

export default useSchoolsData;
