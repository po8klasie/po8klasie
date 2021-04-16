import React, { FC } from 'react';
import { Choice, FilterData } from '../../../../data/filters';
import Chip from '../../../Chip';
import SidebarSection from "./SidebarSection";
interface FiltersPreviewProps {
  filterValues: Record<string, string[]>;
  filterDefinitions: FilterData[];
  onSelectChoice: (filterKey: string, choiceId: string) => void;
  onRemoveChoice: (filterKey: string, choiceId: string) => void;
}

const FiltersPreview: FC<FiltersPreviewProps> = ({
  filterValues,
  filterDefinitions,
  onSelectChoice,
  onRemoveChoice,
}) => {
  const choicesData = Object.entries(filterValues).flatMap(([filterKey, filterValue]) => {
    const filterDefinition = filterDefinitions.find(({ key }) => key === filterKey) as FilterData;

    return filterValue.map((choiceId) => {
      const { label: choiceLabel } = filterDefinition.choices.find(
        ({ id }) => id === choiceId,
      ) as Choice;
      return {
        filterKey,
        filterTitle: filterDefinition.title,
        choiceLabel,
        choiceId,
      };
    });
  });

  if(choicesData.length === 0)
    return null;

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
