import React, { FC, useEffect, useState } from 'react';
import { InputWithAddon } from '../Input';
import {
  SearchControlProps,
  useSearchControl,
} from '../../hooks/useSearchControl';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchools } from '../../store/modules/schools';
import { createToParamHandler } from '../../utils/paramHandlers';
import { createSearchControllerConfig } from '../../utils/searchControllers';
import { searchViews } from '../../data/searchViews';

const SearchQueryController: FC = () => {
  const [query, setQuery] = useState('');
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData,
  }));
  useEffect(() => {
    if (searchData.query !== query) setQuery(searchData.query);
  }, [searchData.query]);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const q = e.target.value;
    setQuery(q);

    dispatch(
      fetchSchools({
        searchData: {
          ...searchData,
          query: q,
        },
      }),
    );
  };
  return (
    <InputWithAddon
      addon={<span className="material-icons">search</span>}
      addonPosition={'left'}
      placeholder="Szukaj szkoły"
      onChange={handleChange}
      value={query}
    />
  );
};

export const searchQueryControllerConfig = createSearchControllerConfig(
  'query',
  {
    defaultValue: '',
    toParamHandler: ({ value, key: _key, mode, p }) => {
      const key = mode === 'api' ? 'school_name' : _key;

      if (typeof value === 'string' && value.length > 0)
        return p.set(key, value as any);

      if (p.has(key)) p.delete(key);
    },
    fromParamHandler: ({ p, key }) => {
      const param = p.has(key) && p.get(key) ? p.get(key) : null;
      if (!param) return null;

      return param.trim();
    },
  },
);

export default SearchQueryController;
