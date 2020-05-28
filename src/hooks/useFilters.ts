import { FilterData } from '../data/filters';
import { removeFromArray } from '../utils/misc';
import { useState } from 'react';

interface UseFiltersOptions {
  defaultValue: Record<string, string[]>;
  idKey: string;
}

export const useFilters = (options: UseFiltersOptions) => {
  const [filtersValues, setFiltersValues] = useState<Record<string, string[]>>(
    options.defaultValue,
  );
  const createHandler = (filterData: FilterData) => (choiceId: string) => {
    const fieldId = (filterData as any)[options.idKey];
    const { choices, multiple } = filterData;
    const valuesForFilter = filtersValues[fieldId]
      ? filtersValues[fieldId]
      : [];
    if (!valuesForFilter.includes(choiceId)) {
      if (multiple && valuesForFilter.length + 1 === choices.length) {
        setFiltersValues({
          ...filtersValues,
          [fieldId]: [],
        });
        return;
      }
      setFiltersValues({
        ...filtersValues,
        [fieldId]: multiple ? [...valuesForFilter, choiceId] : [choiceId],
      });
      return;
    }
    setFiltersValues({
      ...filtersValues,
      [fieldId]: removeFromArray(valuesForFilter, choiceId),
    });
  };
  return {
    filtersValues,
    createHandler,
    setFiltersValues,
  };
};
