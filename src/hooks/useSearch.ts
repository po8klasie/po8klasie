import { useEffect, useRef, useState } from 'react';
import { getPayloadFromParams, toParams } from '../utils/params';
import { Subject } from 'rxjs';
import { diffWithFilters, initialFiltersValues } from '../utils/filters';

export const useSearch = (searchStr: string, store: any) => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filtersValues, setFiltersValues] = useState<{ [x: string]: string[] }>(
    initialFiltersValues,
  );

  const params$ = useRef(new Subject<string>());
  const payload$ = useRef(new Subject<any>());

  useEffect(() => {
    const payload = getPayloadFromParams(searchStr);
    const { school_name, page, ...filtersValuesFromParams } = payload;
    setQuery(school_name ?? '');
    setCurrentPage(page ?? 1);
    setFiltersValues({
      ...filtersValues,
      ...filtersValuesFromParams,
    });
    if (store.results.length === 0) payload$.current.next(payload);

    // eslint-disable-next-line
  }, []);

  const submit = () => {
    const payload = {
      school_name: query,
      ...filtersValues,
    };
    const { page, ...storeParamsWithoutPage } = store.params;
    if (!diffWithFilters(storeParamsWithoutPage, payload)) return;

    const params = toParams(
      {
        q: query,
        ...filtersValues,
      },
      'search',
    );
    setCurrentPage(1);
    params$.current.next(params);
    payload$.current.next(payload);
  };
  const paginate = (page: number) => {
    setCurrentPage(page);

    params$.current.next(
      toParams(
        {
          page: page.toString(),
        },
        'search',
        searchStr,
      ),
    );

    if (
      !store.results ||
      !store.results[page] ||
      store.results[page].length === 0
    ) {
      payload$.current.next({
        school_name: query,
        ...filtersValues,
        page,
      });
    }
  };

  return {
    query,
    setQuery,

    filtersValues,
    setFiltersValues,

    currentPage,
    paginate,

    params$: params$.current,
    payload$: payload$.current,

    submit,
  };
};
