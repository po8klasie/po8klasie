import React, { FC, useState } from 'react';
import { filter } from 'rxjs/operators';
import styled from '../../../../styling/styled';
import QueryFilter from './QueryFilter';
import { FilterData, FilterDataKey } from '../../../../data/filters';
import Filter from './Filter';
import { removeFromArray, removeFromObject } from '../../../../utils/misc';
import FiltersPreview from './FiltersPreview';
import { SidebarSectionWithoutBorder, SidebarTitle } from './SidebarSection';

const FiltersInnerWrapper = styled.div``;

interface FiltersProps {
  filterDefinitions: FilterData[];
  filterValues: Record<string, string[]>;
  onFilterValuesChange: State;
}

const Filters: FC<FiltersProps> = ({ filterDefinitions, filterValues, onFilterValuesChange }) => {
  const [visibleFilters, setVisibleFilters] = useState<string[]>([]);

  const updateFilterValue = (filterKey: FilterDataKey, choicesId: string[]) =>
    onFilterValuesChange((values) => {
      if (choicesId.length === 0) return removeFromObject(values, [filterKey]);
      return {
        ...values,
        [filterKey]: choicesId,
      };
    });

  const removeFilterChoice = (filterKey: string, choiceId: string) => {}
    onFilterValuesChange((values) => ({
      ...values,
      [filterKey]: removeFromArray(values[filterKey], choiceId),
    }));

  const updateFilterVisibility = (filterKey: string, shouldBeVisible: boolean) =>
    setVisibleFilters((state) => {
      if (shouldBeVisible && !state.includes(filterKey)) return [...state, filterKey];
      if (!shouldBeVisible) return removeFromArray(state, filterKey);
      return state;
    });

  const showFilter = (filterKey: string) => updateFilterVisibility(filterKey, true);

  return (
    <FiltersInnerWrapper>
      <SidebarSectionWithoutBorder>
        <SidebarTitle>Filtruj</SidebarTitle>
      </SidebarSectionWithoutBorder>
      <FiltersPreview
        filterValues={filterValues}
        filterDefinitions={filterDefinitions}
        onSelectChoice={showFilter}
        onRemoveChoice={removeFilterChoice}
      />
      {filterDefinitions.map((filterDefinition) => {
        const { key } = filterDefinition;
        const value = filterValues[key];
        const shouldFilterBeVisible = visibleFilters.includes(key);
        const changeFilterVisibility = (visibility: boolean) =>
          updateFilterVisibility(key, visibility);
        return (
          <Filter
            filterDefinition={filterDefinition}
            value={value}
            onFilterChange={updateFilterValue}
            shouldFilterBeVisible={shouldFilterBeVisible}
            changeFilterVisibility={changeFilterVisibility}
          />
        );
      })}
    </FiltersInnerWrapper>
  );
};

export default Filters;
