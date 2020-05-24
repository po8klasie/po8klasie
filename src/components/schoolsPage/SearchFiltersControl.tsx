import React, {FC, useState} from 'react';
import styled from '../../styling/styled';
import Dropdown from '../Dropdown';
import { FilterData, filters } from '../../data/filters';
import MobileFilters from '../MobileFilters';
import {SearchControlProps, useSearchControl} from "../../hooks/useSearchControl";
import {useFilters} from "../../hooks/useFilters";
const DropdownsWrapper = styled.div`
  margin: 2em 0 0 0;
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
const defaultValue = Object.fromEntries(Object.values(filters).map(f => [f[idKey], []]));

const SearchFiltersControl: FC<SearchControlProps> = ({payload$}) => {
  const { state, updateState } = useSearchControl<Record<string, string[]>>({
    key: 'filters',
    defaultValue,
    payload$
  });

  const { createHandler, filtersValues } = useFilters({
    defaultValue: state,
    idKey
  });

  const syncStateWithLocal = () => updateState(filtersValues);

  return (
    <>
      <DropdownsWrapper>
        {filters.map((filter: FilterData) => {
          const handleSelect = createHandler(filter);
          return  (
              <Dropdown
                  key={filter.apiParam}
                  title={filter.title}
                  choices={filter.choices}
                  onSelect={handleSelect}
                  onSubmit={syncStateWithLocal}
                  selected={filtersValues && filtersValues[filter[idKey]] ? filtersValues[filter[idKey]] : []}
              />
          )
        })}
      </DropdownsWrapper>
      {/*<MobileFiltersWrapper>*/}
      {/*  <MobileFilters*/}
      {/*    filters={filters}*/}
      {/*    onSelect={handleSelect}*/}
      {/*    filtersValues={props.filtersValues}*/}
      {/*  />*/}
      {/*</MobileFiltersWrapper>*/}
    </>
  );
};
export default SearchFiltersControl;
