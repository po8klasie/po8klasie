import { useMemo, useState } from 'react';

import { FilterDefinitionsUtils, FiltersState, FiltersStateUtils } from '../utils/filters';
import { FilterDefinition } from '../data/filters';

export interface UseFiltersOutput {
  filtersDefinition: FilterDefinition[];
  filtersState: FiltersState;
  setFiltersState: (state: FiltersState) => void;
  stateUtils: FiltersStateUtils;
  definitionsUtils: FilterDefinitionsUtils;
}

const useFilters = (
  filtersDefinition: FilterDefinition[],
  initialFiltersState: FiltersState = new Map(),
): UseFiltersOutput => {
  const [filtersState, setFiltersState] = useState<FiltersState>(initialFiltersState);
  const stateUtils = new FiltersStateUtils(filtersState);
  const definitionsUtils = useMemo(() => new FilterDefinitionsUtils(filtersDefinition), [
    filtersDefinition,
  ]);

  return {
    filtersDefinition,
    filtersState,
    setFiltersState,
    stateUtils,
    definitionsUtils,
  };
};

export default useFilters;
