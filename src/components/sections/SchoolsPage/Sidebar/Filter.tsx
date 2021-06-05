import React, { FC, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { BsChevronDown } from 'react-icons/all';
import styled from '../../../../styling/styled';
import {
  FilterChoiceDefinition as ChoiceDefinition,
  FilterDefinition,
} from '../../../../data/filters';
import SidebarSection, { SidebarSectionWithoutBorder } from './SidebarSection';
import { FilterChoiceId } from '../../../../utils/filters';

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
  ${(props) =>
    !props.active &&
    `
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

interface FilterProps {
  filterDefinition: FilterDefinition;
  toggleFilterChoice: (choiceId: FilterChoiceId) => void;
  isChoiceSelected: (choiceId: FilterChoiceId) => boolean;
  changeFilterVisibility: (visibility: boolean) => void;
  shouldFilterBeVisible: boolean;
}

const Filter: FC<FilterProps> = ({
  toggleFilterChoice,
  isChoiceSelected,
  changeFilterVisibility,
  shouldFilterBeVisible,
  filterDefinition: { title, choices },
}) => {
  const accordionContentRef = useRef<HTMLDivElement>(null);

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
          return (
            <Choice
              key={id}
              choice={choice}
              onChange={() => toggleFilterChoice(id)}
              active={isChoiceSelected(id)}
            />
          );
        })}
      </AccordionContent>
    </Accordion>
  );
};

export default Filter;
