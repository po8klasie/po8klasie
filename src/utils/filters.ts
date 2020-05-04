import { FilterData, filters } from '../data/filters';

export const initialFiltersValues = Object.fromEntries(
  filters.map((filter: FilterData) => [filter.fieldId, []]),
);

export const diffWithFilters = (p: any, q: any) =>
  JSON.stringify({
    ...initialFiltersValues,
    ...p,
  }) !== JSON.stringify({ ...initialFiltersValues, ...q });
