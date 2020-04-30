import React, { useState } from 'react';
import styled from '../styling/styled';
import Dropdown from './Dropdown';
import { FilterData, filters } from '../data/filters';
import { filter } from 'rxjs/operators';

const FiltersWrapper = styled.div`
  margin: 2em 0 4em 0;
  display: flex;
`;
type FiltersState = {};
const removeFromArray = <T extends {}>(arr: T[], element: T) =>
  arr.filter((el: T) => el !== element);
const Filters = () => {
  console.log(
    Object.fromEntries(
      filters.map((filter: FilterData) => [filter.fieldId, []]),
    ),
  );
  const [values, setValues] = useState<{
    [x: string]: string[];
  }>(
    Object.fromEntries(
      filters.map((filter: FilterData) => [filter.fieldId, []]),
    ),
  );
  const handleSelect = (
    fieldId: string,
    multiple: boolean,
    choiceId: string,
  ) => {
    const fieldData = filters.find(x => x.fieldId === fieldId);
    if (!fieldData) return;

    if (!values[fieldId].includes(choiceId)) {
      if (multiple && values[fieldId].length + 1 === fieldData.choices.length) {
        setValues({
          ...values,
          [fieldId]: [],
        });
        return;
      }
      setValues({
        ...values,
        [fieldId]: multiple ? [...values[fieldId], choiceId] : [choiceId],
      });
      return;
    }
    setValues({
      ...values,
      [fieldId]: removeFromArray(values[fieldId], choiceId),
    });
  };
  return (
    <FiltersWrapper>
      {filters.map((filter: FilterData) => (
        <Dropdown
          key={filter.fieldId}
          title={filter.title}
          choices={filter.choices}
          onSelect={(data: string) =>
            handleSelect(filter.fieldId, filter.multiple, data)
          }
          selected={values[filter.fieldId]}
        />
      ))}
    </FiltersWrapper>
  );
};
export default Filters;
