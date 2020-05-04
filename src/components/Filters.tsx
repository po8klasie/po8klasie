import React from 'react';
import styled from '../styling/styled';
import Dropdown from './Dropdown';
import { FilterData, filters } from '../data/filters';
import MobileFilters from './MobileFilters';
const DropdownsWrapper = styled.div`
  margin: 2em 0;
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
type FiltersState = {};
const removeFromArray = <T extends {}>(arr: T[], element: T) =>
  arr.filter((el: T) => el !== element);
const Filters = (props: any) => {
  const handleSelect = (
    fieldId: string,
    multiple: boolean,
    choiceId: string,
  ) => {
    const fieldData = filters.find(x => x.fieldId === fieldId);
    if (!fieldData) return;

    if (!props.filtersValues[fieldId].includes(choiceId)) {
      if (
        multiple &&
        props.filtersValues[fieldId].length + 1 === fieldData.choices.length
      ) {
        props.setFiltersValues({
          ...props.filtersValues,
          [fieldId]: [],
        });
        return;
      }
      props.setFiltersValues({
        ...props.filtersValues,
        [fieldId]: multiple
          ? [...props.filtersValues[fieldId], choiceId]
          : [choiceId],
      });
      return;
    }
    props.setFiltersValues({
      ...props.filtersValues,
      [fieldId]: removeFromArray(props.filtersValues[fieldId], choiceId),
    });
  };
  return (
    <>
      <DropdownsWrapper>
        {filters.map((filter: FilterData) => (
          <Dropdown
            key={filter.fieldId}
            title={filter.title}
            choices={filter.choices}
            onSelect={(data: string) =>
              handleSelect(filter.fieldId, filter.multiple, data)
            }
            onSubmit={props.onSubmit}
            selected={props.filtersValues[filter.fieldId]}
          />
        ))}
      </DropdownsWrapper>
      <MobileFiltersWrapper>
        <MobileFilters
          filters={filters}
          onSelect={handleSelect}
          filtersValues={props.filtersValues}
        />
      </MobileFiltersWrapper>
    </>
  );
};
export default Filters;
