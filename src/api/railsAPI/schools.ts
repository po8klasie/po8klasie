import useSWR from 'swr';
import qs, { StringifiableRecord } from 'query-string';
import camelCaseKeys from 'camelcase-keys';
import { isPlainObject, camelCase } from 'lodash';

const keysToCamel = function (o: Record<string, unknown>) {
  if (isPlainObject(o)) {
    const n: Record<string, unknown> = {};

    Object.keys(o).forEach((k) => {
      n[camelCase(k)] = keysToCamel(o[k] as Record<string, unknown>);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
};

const fetcher = async (url: string) => {
  const res = await fetch(url).then((res) => res.json());
  console.log(res, keysToCamel(res));
  return keysToCamel(res);
};

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
