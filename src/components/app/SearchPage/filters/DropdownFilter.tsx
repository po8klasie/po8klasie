import React, { FC, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MdCheck, MdExpandMore } from 'react-icons/md';
import 'react-perfect-scrollbar/dist/css/styles.css';
import styles from './styles/DropdownFilter.module.css';

const useSelected = (initialState: unknown[], isMultipleChoice: boolean) => {
  const [selected, setSelected] = useState(initialState);

  const toggleItemMultiple = (choiceId: unknown) =>
    selected.includes(choiceId) ? selected.filter((i) => i !== choiceId) : [...selected, choiceId];

  const toggleItemSingle = (choiceId: unknown) => (selected.includes(choiceId) ? [] : [choiceId]);

  const selectItem = (choiceId: unknown) => {
    setSelected(isMultipleChoice ? toggleItemMultiple(choiceId) : toggleItemSingle(choiceId));
  };

  return { selected, setSelected, selectItem };
};

interface DropdownChoice {
  value: string;
  label: string;
}

interface DropdownFilterOptions {
  title: string;
  choices: DropdownChoice[];
  isMultipleChoice?: boolean;
}

interface DropdownFilterProps {
  options: DropdownFilterOptions;
  value: unknown;
  onChange: (values: unknown[]) => void;
}

const DropdownFilter: FC<DropdownFilterProps> = ({
  onChange,
  options: { title, choices, isMultipleChoice },
}) => {
  const { selected, selectItem } = useSelected([], !!isMultipleChoice);
  const isDropdownActive = selected.length > 0;

  /* TODO(micorix): add keyboard listener and proper ARIA */
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
  return (
    <div className={styles.dropdownWrapper} onMouseLeave={() => onChange(selected)}>
      <button
        type="button"
        className={isDropdownActive ? styles.dropdownButtonActive : styles.dropdownButton}
      >
        {title}
        <MdExpandMore />
        <span className={styles.dropdownSpace} />
      </button>
      <div className={styles.dropdownListWrapper}>
        <PerfectScrollbar>
          <ul className={styles.dropdownList}>
            {choices.map((choice: DropdownChoice) => (
              <li
                className={
                  selected.includes(choice.value)
                    ? styles.dropdownListItemActive
                    : styles.dropdownListItem
                }
                onClick={() => selectItem(choice.value)}
                key={choice.value}
              >
                {choice.label} <MdCheck />
              </li>
            ))}
          </ul>
        </PerfectScrollbar>
      </div>
    </div>
  );
};
export default DropdownFilter;
