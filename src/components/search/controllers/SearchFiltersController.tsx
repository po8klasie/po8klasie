import React, { FC, useEffect } from 'react';
import styled from '../../../styling/styled';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../Dropdown';
import MobileFilters from '../../MobileFilters';
import { fetchSchools } from '../../../store/modules/schools';
import { FilterData, filters } from '../../../data/filters';
import { useFilters } from '../../../hooks/useFilters';
import { createSearchControllerConfig } from '../../../utils/searchControllers';
import { transformArr } from '../../../utils/params';
import { areObjectsDifferent } from '../../../utils/misc';

const DropdownsWrapper = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
  }
`;
const MobileFiltersWrapper = styled.div`
  margin: 2em 0;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
const idKey = 'searchParam';

const SearchFiltersController: FC = () => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData,
  }));

  const dispatch = useDispatch();

  const { createHandler, filtersValues, setFiltersValues } = useFilters({
    defaultValue: searchData.filters,
    idKey,
  });
  useEffect(() => {
    if (areObjectsDifferent(searchData.filters, filtersValues))
      setFiltersValues(searchData.filters);

    // eslint-disable-next-line
  }, [searchData.filters]);

  const handleSubmit = (e: any) => {
    if (!areObjectsDifferent(filtersValues, searchData.filters)) return;

    dispatch(
      fetchSchools({
        searchData: {
          ...searchData,
          filters: filtersValues,
        },
      }),
    );
  };

  return (
    <>
      <DropdownsWrapper>
        {filters.map((filter: FilterData) => {
          const handleSelect = createHandler(filter);
          return (
            <Dropdown
              key={filter.apiParam}
              title={filter.title}
              choices={filter.choices}
              onSelect={handleSelect}
              onSubmit={handleSubmit}
              selected={
                filtersValues && filtersValues[filter[idKey]]
                  ? filtersValues[filter[idKey]]
                  : []
              }
            />
          );
        })}
      </DropdownsWrapper>
      <MobileFiltersWrapper>
        <MobileFilters
          filters={filters}
          createHandler={createHandler}
          onSubmit={handleSubmit}
          filtersValues={filtersValues}
          idKey={idKey}
        />
      </MobileFiltersWrapper>
    </>
  );
};
export const searchFiltersControllerConfig = createSearchControllerConfig(
  'filters',
  {
    defaultValue: Object.fromEntries(
      Object.values(filters).map((f) => [f[idKey], []]),
    ),
    toParamHandler: ({ value, key, mode, p }) => {
      Object.entries(value as Record<string, string[]>).forEach(
        ([filterKey, filterValues]) => {
          const filter = filters.find((f) => f[idKey] === filterKey);
          if (filterValues.length > 0 && filter) {
            p.set(
              mode === 'search' ? filter[idKey] : filter.apiParam,
              transformArr(filterValues, mode),
            );
          } else if (p.has(filterKey)) p.delete(filterKey);
        },
      );
    },
    fromParamHandler: ({ p, key }) => {
      const output: Record<string, string[]> = {};
      filters.forEach((filter: FilterData) => {
        const filterKey = filter[idKey];
        const param =
          p.has(filterKey) && p.get(filterKey) ? p.get(filterKey) : null;
        if (param) {
          output[filter[idKey]] = param
            .split(',')
            .filter((str) =>
              filter.choices.find((c) => (c.id = str.toLowerCase())),
            );
        }
      });

      return output;
    },
  },
);

export default SearchFiltersController;
