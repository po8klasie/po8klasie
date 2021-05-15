import React, { FC, useState } from 'react';
import styled from '../../../../styling/styled';
import { FilterDefinition } from '../../../../data/filters';
import Filter from './Filter';
import { removeFromArray } from '../../../../utils/misc';
import FiltersPreview from './FiltersPreview';
import { SidebarSectionWithoutBorder, SidebarTitle } from './SidebarSection';
import { UseFiltersOutput } from '../../../../hooks/useFilters';
import { FilterChoiceId } from '../../../../utils/filters';

const FiltersInnerWrapper = styled.div``;

interface FiltersProps {
  filters: UseFiltersOutput;
}

const Filters: FC<FiltersProps> = ({ filters }) => {
  const [visibleFilters, setVisibleFilters] = useState<string[]>([]);

  const updateFilterVisibility = (filterKey: string, shouldBeVisible: boolean) =>
    setVisibleFilters((state) => {
      if (shouldBeVisible && !state.includes(filterKey)) return [...state, filterKey];
      if (!shouldBeVisible) return removeFromArray(state, filterKey);
      return state;
    });
  const showFilter = (filterKey: string) => updateFilterVisibility(filterKey, true);

  const renderFilter = (filterDefinition: FilterDefinition) => {
    const { key } = filterDefinition;
    const isChoiceSelected = (choiceId: FilterChoiceId) =>
      filters.stateUtils.isChoiceSelected(key, choiceId);

    const toggleFilterChoice = (choiceId: FilterChoiceId) =>
      filters.setFiltersState(filters.stateUtils.toggleFilterChoice(filterDefinition, choiceId));

    const shouldFilterBeVisible = visibleFilters.includes(key);
    const changeFilterVisibility = (visibility: boolean) => updateFilterVisibility(key, visibility);

    return (
      <Filter
        filterDefinition={filterDefinition}
        isChoiceSelected={isChoiceSelected}
        toggleFilterChoice={toggleFilterChoice}
        shouldFilterBeVisible={shouldFilterBeVisible}
        changeFilterVisibility={changeFilterVisibility}
      />
    );
  };

  return (
    <FiltersInnerWrapper>
      <SidebarSectionWithoutBorder>
        <SidebarTitle noMargin>Filtruj</SidebarTitle>
      </SidebarSectionWithoutBorder>

      <FiltersPreview filters={filters} onSelectChoice={showFilter} />
      {filters.filtersDefinition.map(renderFilter)}
    </FiltersInnerWrapper>
  );
};

export default Filters;
