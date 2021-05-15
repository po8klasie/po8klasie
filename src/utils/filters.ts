import { FilterChoiceDefinition, FilterDefinition, FilterKey } from '../data/filters';

export type FilterChoiceId = string;
export type FilterChoices = Set<FilterChoiceId>;
export type FiltersState = Map<FilterKey, FilterChoices>;

export class FiltersStateUtils {
  private readonly state: FiltersState;

  constructor(state: FiltersState) {
    this.state = state;
  }

  private getState = (): FiltersState => new Map(this.state); // make a clone

  addFilterChoices = (filterKey: FilterKey, choiceId: FilterChoiceId): FiltersState => {
    const state = this.getState();
    return state.set(filterKey, new Set(state.get(filterKey)).add(choiceId));
  };

  removeFilterChoices = (filterKey: FilterKey, choiceId: FilterChoiceId): FiltersState => {
    const state = this.getState();
    const updatedValues = new Set(state.get(filterKey));
    updatedValues.delete(choiceId);

    if (updatedValues.size > 0) return state.set(filterKey, updatedValues);

    state.delete(filterKey);
    return state;
  };

  toggleFilterChoice = (filterDefinition: FilterDefinition, choiceId: string): FiltersState => {
    const { key, multiple, choices } = filterDefinition;

    if (this.isChoiceSelected(key, choiceId)) {
      return this.removeFilterChoices(key, choiceId);
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

      return this.addFilterChoices(key, choiceId);
    }

    return this.getState().set(key, new Set([choiceId]));
  };

  isChoiceSelected = (filterKey: FilterKey, choiceId: string): boolean => {
    return this.state.has(filterKey) && (this.state.get(filterKey) as FilterChoices).has(choiceId);
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
    choiceId: string,
  ): FilterChoiceDefinition => {
    return filterDefinition.choices.find(
      (choiceDefinition) => choiceDefinition.id === choiceId,
    ) as FilterChoiceDefinition;
  };
}

export const convertFilterStateToObject = (
  filtersState: FiltersState,
): Record<string, string[]> => {
  return Object.fromEntries(
    // value is a set. we have to convert it to array
    Array.from(filtersState.entries()).map(([key, value]) => [key, Array.from(value)]),
  );
};
