import {
  FilterChoiceDefinition,
  FilterChoiceValue,
  FilterDefinition,
  FilterKey,
  filters as filterDefinitions,
} from '../data/filters';

export type FilterChoices = Set<FilterChoiceValue>;
export type FiltersState = Map<FilterKey, FilterChoices>;

export class FiltersStateUtils {
  private readonly state: FiltersState;

  constructor(state: FiltersState) {
    this.state = state;
  }

  private getState = (): FiltersState => new Map(this.state); // make a clone

  addFilterChoices = (filterKey: FilterKey, choiceValue: FilterChoiceValue): FiltersState => {
    const state = this.getState();
    return state.set(filterKey, new Set(state.get(filterKey)).add(choiceValue));
  };

  removeFilterChoices = (filterKey: FilterKey, choiceValue: FilterChoiceValue): FiltersState => {
    const state = this.getState();
    const updatedValues = new Set(state.get(filterKey));
    updatedValues.delete(choiceValue);

    if (updatedValues.size > 0) return state.set(filterKey, updatedValues);

    state.delete(filterKey);
    return state;
  };

  toggleFilterChoice = (
    filterDefinition: FilterDefinition,
    choiceValue: FilterChoiceValue,
  ): FiltersState => {
    const { key, multiple, choices } = filterDefinition;

    if (this.isChoiceSelected(key, choiceValue)) {
      return this.removeFilterChoices(key, choiceValue);
    }

    if (multiple) {
      if (
        this.state.has(key) &&
        choices.length - 1 === (this.state.get(key) as FilterChoices).size
      ) {
        const state = this.getState();
        state.delete(key);
        return state;
      }

      return this.addFilterChoices(key, choiceValue);
    }

    return this.getState().set(key, new Set([choiceValue]));
  };

  isChoiceSelected = (filterKey: FilterKey, choiceValue: FilterChoiceValue): boolean => {
    return (
      this.state.has(filterKey) && (this.state.get(filterKey) as FilterChoices).has(choiceValue)
    );
  };
}

export class FilterDefinitionsUtils {
  filterDefinitions: FilterDefinition[];

  constructor(filterDefinitions: FilterDefinition[]) {
    this.filterDefinitions = filterDefinitions;
  }

  getFilterDefinitionByKey = (filterKey: FilterKey): FilterDefinition => {
    return this.filterDefinitions.find(({ key }) => key === filterKey) as FilterDefinition;
  };

  getChoiceDefinition = (
    filterDefinition: FilterDefinition,
    choiceValue: FilterChoiceValue,
  ): FilterChoiceDefinition => {
    return filterDefinition.choices.find(
      (choiceDefinition) => choiceDefinition.value === choiceValue,
    ) as FilterChoiceDefinition;
  };
}

export const convertFilterStateToObject = (
  filtersState: FiltersState,
): Record<string, FilterChoiceValue[]> => {
  return Object.fromEntries(
    // value is a set. we have to convert it to array
    Array.from(filtersState.entries()).map(([key, value]) => [key, Array.from(value)]),
  );
};

export const convertFilterStateToGraphQLVariables = (
  filtersState: FiltersState,
): Record<FilterKey, FilterChoiceValue[] | FilterChoiceValue> => {
  const filterDefinitionUtils = new FilterDefinitionsUtils(filterDefinitions);
  return Object.fromEntries(
    // value is a set. we have to convert it to array
    (Array.from(filtersState.entries()) as [FilterKey, FilterChoices][]).map(([key, value]) => {
      const { backendKey } = filterDefinitionUtils.getFilterDefinitionByKey(key);
      const variableValue = Array.from(value);

      if (variableValue.length === 0) return [backendKey, null];

      if (variableValue.length === 1) return [backendKey, variableValue[0]];

      return [backendKey as FilterKey, variableValue];
    }),
  );
};
