import React, { FC } from 'react';
import { FilterKey } from '../../../../data/filters';
import Chip from '../../../Chip';
import SidebarSection from './SidebarSection';
import { UseFiltersOutput } from '../../../../hooks/useFilters';

interface ChoiceData {
  filterKey: FilterKey;
  filterTitle: string;
  choiceLabel: string;
  choiceId: string;
}

const getChoicesData = (filters: UseFiltersOutput) => {
  let choicesData: ChoiceData[] = [];
  filters.filtersState.forEach((choiceIds, filterKey) => {
    const filterDefinition = filters.definitionsUtils.getFilterDefinitionByKey(filterKey);

    choicesData = [
      ...choicesData,
      ...filterDefinition.choices
        .filter(({ id }) => choiceIds.has(id))
        .map(({ id, label }) => ({
          filterKey,
          filterTitle: filterDefinition.title,
          choiceLabel: label,
          choiceId: id,
        })),
    ];
  });

  return choicesData;
};

interface FiltersPreviewProps {
  filters: UseFiltersOutput;
  onSelectChoice: (filterKey: string, choiceId: string) => void;
}

const FiltersPreview: FC<FiltersPreviewProps> = ({ filters, onSelectChoice }) => {
  const choicesData = getChoicesData(filters);

  const onRemoveChoice = (filterKey: FilterKey, choiceId: string) => {
    filters.setFiltersState(filters.stateUtils.removeFilterChoices(filterKey, choiceId));
  };

  if (choicesData.length === 0) return null;

  return (
    <SidebarSection>
      {choicesData.map(({ choiceId, choiceLabel, filterKey }) => (
        <Chip
          key={choiceId}
          label={choiceLabel}
          onClick={() => onSelectChoice(filterKey, choiceId)}
          onRemove={() => onRemoveChoice(filterKey, choiceId)}
        />
      ))}
    </SidebarSection>
  );
};

export default FiltersPreview;
