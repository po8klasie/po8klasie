import { FilterData, filters } from '../data/filters';
import {removeFromArray} from "./misc";

export const initialFiltersValues = Object.fromEntries(
  filters.map((filter: FilterData) => [filter.apiParam, []]),
);

export const diffWithFilters = (p: any, q: any) =>
  JSON.stringify({
    ...initialFiltersValues,
    ...p,
  }) !== JSON.stringify({ ...initialFiltersValues, ...q });
