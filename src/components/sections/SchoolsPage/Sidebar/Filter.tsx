import React, { FC, MouseEvent, SyntheticEvent, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { BsChevronDown } from 'react-icons/all';
import styled from '../../../../styling/styled';
import QueryFilter from './QueryFilter';
import { Choice as ChoiceDefinition, FilterData, FilterDataKey } from '../../../../data/filters';
import { removeFromArray } from '../../../../utils/misc';
import SidebarSection, { SidebarSectionWithoutBorder } from './SidebarSection';

const Accordion = styled.div``;

const AccordionTitle = styled(SidebarSection.withComponent('button'))<{ active: boolean }>`
  background: none;
  width: 100%;
  border-top: 0;
  border-left: none;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  cursor: pointer;

  svg {
    transition: 0.2s all;
    transform: rotate(${(props) => (props.active ? '180' : '0')}deg);
  }
`;

const AccordionContent = styled(SidebarSectionWithoutBorder)<{ active: boolean }>`
  background-color: #f2f1f1;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  ${props => !props.active && `
    padding-top: 0;
    padding-bottom: 0;
  `}
`;

const ChoiceLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  cursor: pointer;
`;

interface ChoiceProps {
  choice: ChoiceDefinition;
  active: boolean;
  onChange: (active: boolean) => void;
}

const Choice: FC<ChoiceProps> = ({ choice, active, onChange }) => {
  const choiceCheckboxId = nanoid();
  return (
    <ChoiceLabel htmlFor={choiceCheckboxId}>
      <span>{choice.label}</span>
      <input
        type="checkbox"
        onChange={() => onChange(!active)}
        checked={active}
        id={choiceCheckboxId}
      />
    </ChoiceLabel>
  );
};

const getSafeValue = (maybeValue: unknown): string[] =>
  Array.isArray(maybeValue) ? maybeValue : [];

const choiceClickHandlerFactory = (filterProps: FilterProps) => (
  choiceId: ChoiceDefinition['id'],
) => () => {
  const {
    value,
    onFilterChange,
    filterDefinition: { multiple, key, choices },
  } = filterProps;

  const safeValue = getSafeValue(value);

  const updateChoices = (choicesToUpdate: string[]) => onFilterChange(key, choicesToUpdate);

  if (safeValue.includes(choiceId)) return updateChoices(removeFromArray(safeValue, choiceId));

  if (!multiple) return updateChoices([choiceId]);
  if(safeValue.length === choices.length - 1) return updateChoices([])
  return updateChoices([...safeValue, choiceId]);
};

interface FilterProps {
  filterDefinition: FilterData;
  onFilterChange: (filterKey: FilterDataKey, choices: string[]) => void;
  changeFilterVisibility: (visibility: boolean) => void;
  shouldFilterBeVisible: boolean;
  value: string[];
}

const Filter: FC<FilterProps> = (props) => {
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const createClickHandler = choiceClickHandlerFactory(props);
  const {
    value,
    filterDefinition: { title, choices },
    changeFilterVisibility,
    shouldFilterBeVisible,
  } = props;

  const handleToggle = () => changeFilterVisibility(!shouldFilterBeVisible);

  useEffect(() => {
    const element = accordionContentRef.current;
    if (element) {
      element.style.maxHeight = shouldFilterBeVisible ? `${element.scrollHeight}px` : '0';
    }
  }, [shouldFilterBeVisible]);

  return (
    <Accordion>
      <AccordionTitle
        onClick={handleToggle}
        hideBottomBorder={shouldFilterBeVisible}
        active={shouldFilterBeVisible}
      >
        <span>{title}</span>
        <BsChevronDown />
      </AccordionTitle>
      <AccordionContent ref={accordionContentRef} active={shouldFilterBeVisible}>
        {choices.map((choice) => {
          const { id } = choice;
          const handleClick = createClickHandler(id);
          const isChoiceActive = getSafeValue(value).includes(id);
          return <Choice choice={choice} onChange={handleClick} active={isChoiceActive} />;
        })}
      </AccordionContent>
    </Accordion>
  );
};

export default Filter;
