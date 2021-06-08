import React, { FC } from 'react';
import { FilterChoiceValue, FilterKey } from '../../../../data/filters';
import Chip from '../../../Chip';
import SidebarSection from './SidebarSection';
import { UseFiltersOutput } from '../../../../hooks/useFilters';

interface ChoiceData {
  filterKey: FilterKey;
  filterTitle: string;
  choiceLabel: string;
  choiceValue: FilterChoiceValue;
}

const getChoicesData = (filters: UseFiltersOutput) => {
  let choicesData: ChoiceData[] = [];
  filters.filtersState.forEach((choiceValues, filterKey) => {
    const filterDefinition = filters.definitionsUtils.getFilterDefinitionByKey(filterKey);

    choicesData = [
      ...choicesData,
      ...filterDefinition.choices
        .filter(({ value }) => choiceValues.has(value))
        .map(({ value, label }) => ({
          filterKey,
          filterTitle: filterDefinition.title,
          choiceLabel: label,
          choiceValue: value,
        })),
    ];
  });

  return choicesData;
};

interface FiltersPreviewProps {
  filters: UseFiltersOutput;
  onSelectChoice: (filterKey: string, choiceValue: FilterChoiceValue) => void;
}

const FiltersPreview: FC<FiltersPreviewProps> = ({ filters, onSelectChoice }) => {
  const choicesData = getChoicesData(filters);

  const onRemoveChoice = (filterKey: FilterKey, choiceValue: FilterChoiceValue) => {
    filters.setFiltersState(filters.stateUtils.removeFilterChoices(filterKey, choiceValue));
  };

  if (choicesData.length === 0) return null;

  return (
    <SidebarSection>
      {choicesData.map(({ choiceValue, choiceLabel, filterKey }) => (
        <Chip
          key={choiceValue.toString()}
          label={choiceLabel}
          onClick={() => onSelectChoice(filterKey, choiceValue)}
          onRemove={() => onRemoveChoice(filterKey, choiceValue)}
        />
      ))}
    </SidebarSection>
  );
};

export default FiltersPreview;
