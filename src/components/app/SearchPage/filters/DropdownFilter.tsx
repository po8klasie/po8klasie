import React, { FC, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MdCheck } from '@react-icons/all-files/md/MdCheck';
import { MdExpandMore } from '@react-icons/all-files/md/MdExpandMore';
import { Disclosure } from '@headlessui/react';
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

export interface DropdownFilterOptions {
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
  value,
  options: { title, choices, isMultipleChoice },
}) => {
  const { selected, selectItem } = useSelected(value as [], !!isMultipleChoice);
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

export const MobileDropdownFilter: FC<DropdownFilterProps> = ({
  onChange,
  value,
  options: { title, choices, isMultipleChoice },
}) => {
  const { selected, selectItem } = useSelected(value as [], !!isMultipleChoice);

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <div className="border-b border-light">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between px-2 py-2">
              <span>{title}</span>
              <MdExpandMore
                className={`text-2xl text-primary transition transform ${open ? 'rotate-180' : ''}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-2">
              <ul className="">
                {choices.map((choice: DropdownChoice) => (
                  <li
                    className={`rounded-lg bg-opacity-50 my-2 px-2 py-2 flex items-center border-2 border-light transition
                  ${selected.includes(choice.value) ? 'bg-light' : ''}`}
                    onClick={() => selectItem(choice.value)}
                    key={choice.value}
                  >
                    <MdCheck
                      className={`mr-2 transition text-primary ${
                        selected.includes(choice.value) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />{' '}
                    {choice.label}
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DropdownFilter;
