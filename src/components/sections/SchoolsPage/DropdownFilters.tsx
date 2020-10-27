import React, { FC } from 'react';
import styled from '../../../styling/styled';
import Dropdown from '../../Dropdown';
import MobileFilters from '../../MobileFilters';
import { FilterData, filters } from '../../../data/filters';
import { removeFromArray } from '../../../utils/misc';

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
const idKey = 'key';

const deleteFromObject = (obj: any, keys: string[]) => {
  const clonedObj = { ...obj };
  keys.forEach((key) => delete clonedObj[key]);
  return clonedObj;
};

const DropdownFilters: FC<any> = ({ onFiltersValuesChange, filtersValues }) => {
  const createHandler = (filterData: FilterData) => (choiceId: string) => {
    const filterKey = filterData.key;
    const { choices, multiple } = filterData;
    const valuesForFilter = filtersValues[filterKey]
      ? filtersValues[filterKey]
      : [];
    if (!valuesForFilter.includes(choiceId)) {
      if (multiple && valuesForFilter.length + 1 === choices.length) {
        onFiltersValuesChange(deleteFromObject(filtersValues, [filterKey]));
        return;
      }
      onFiltersValuesChange({
        ...filtersValues,
        [filterKey]: multiple ? [...valuesForFilter, choiceId] : [choiceId],
      });
      return;
    }
    const choicesLeft = removeFromArray(valuesForFilter, choiceId);

    if (choicesLeft.length === 0) {
      onFiltersValuesChange(deleteFromObject(filtersValues, [filterKey]));
      return;
    }
    onFiltersValuesChange({
      ...filtersValues,
      [filterKey]: choicesLeft,
    });
  };

  const handleSubmit = (e: any) => {};

  return (
    <>
      <DropdownsWrapper>
        {filters.map((filter: FilterData) => {
          const handleSelect = createHandler(filter);
          return (
            <Dropdown
              key={filter.key}
              title={filter.title}
              choices={filter.choices}
              onSelect={handleSelect}
              onSubmit={handleSubmit}
              selected={
                filtersValues && filtersValues[filter.key]
                  ? filtersValues[filter.key]
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

export default DropdownFilters;
