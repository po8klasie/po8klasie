import React, { FC, useCallback } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import qs, { StringifiableRecord } from 'query-string';
import { useRouter } from 'next/router';
import FiltersRow, { useFiltersValues } from './FiltersRow';
import useSchoolsDataRails from '../../../api/schools';
import SchoolsBrowser from './SchoolsBrowser';
import useDebouncedValue from '../../../hooks/useDebouncedValue';
import { useProjectConfig } from '../../../config/projectConfigContext';
import { SearchViewConfig } from '../../../config/types';

const SearchView: FC = () => {
  const router = useRouter();
  const { searchView: searchViewConfig } = useProjectConfig();
  const { defaultQuery } = searchViewConfig as SearchViewConfig;

  const { filtersValues, setFiltersValues } = useFiltersValues();
  const debouncedFiltersValues = useDebouncedValue(filtersValues, 300);

  const { data } = useSchoolsDataRails(debouncedFiltersValues as StringifiableRecord, defaultQuery);

  const updateQueryString = useCallback(
    (obj: StringifiableRecord) => {
      router.replace(
        qs.stringifyUrl(
          {
            url: router.asPath,
            query: obj,
          },
          { skipEmptyString: true, arrayFormat: 'comma' },
        ),
      );
    },
    [router],
  );

  useDeepCompareEffect(() => {
    updateQueryString(filtersValues as StringifiableRecord);
  }, [filtersValues]);

  return (
    <div>
      <FiltersRow filtersValues={filtersValues} setFiltersValues={setFiltersValues} />
      <SchoolsBrowser items={data ? data.items : []} />
    </div>
  );
};

export default SearchView;
