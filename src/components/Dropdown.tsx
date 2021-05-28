import React, { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { MdCheck, MdExpandMore } from 'react-icons/md';
import styled from '../styling/styled';
import { FilterChoiceDefinition } from '../data/filters';

const DropdownWrapper = styled.div<{ active: boolean }>`
  margin-right: 10px;
  position: relative;
  z-index: 1001;
  button {
    display: flex;
    z-index: 1;
    position: relative;
    align-items: center;
    white-space: nowrap;
    padding: 10px;
    background: white;
    border-style: solid;
    margin: ${(props) => (props.active ? '-1px' : '0')};
    border-width: ${(props) => (props.active ? '2' : '1')}px;
    border-color: ${(props) => props.theme.colors.dark};
    border-radius: 10px;
    font-size: 1em;
    transition: 0.2s all;
    & > svg {
      color: ${(props) => props.theme.colors.dark};
      margin-left: 10px;
      font-size: 24px;
      transition: transform 0.2s;
    }
  }
  .space {
    position: absolute;
    display: none;
    top: calc(100% - 10px);
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 1000;
  }
  .list {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 100%;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 5px;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s all;
    z-index: 1000;
    ul {
      margin: 0;
      padding-inline-start: 0;
      position: relative;
    }
    .scrollbar-container {
      max-height: 200px;
    }
  }
  &:hover .space,
  .space:hover {
    display: block;
  }
  &:hover div,
  div:hover {
    opacity: 1;
    visibility: visible;
  }
  &:hover button svg {
    transform: rotate(-180deg);
  }
  &:hover button {
    background: ${(props) => props.theme.colors.light};
  }
`;
const ListItem = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.active ? '#F2F2F2' : '')};
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 15px 10px 7px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
  svg {
    color: green;
    margin-left: 10px;
    font-size: 24px;
    transition: opacity 0.2s;
    opacity: ${(props) => (props.active ? 1 : 0)};
  }
`;

interface DropdownProps {
  title: string;
  choices: FilterChoiceDefinition[];
  selected: string[];
  onSelect: (param: string) => void;
  onSubmit?: () => void;
}

const Dropdown: FC<DropdownProps> = ({ title, choices, selected, onSelect, onSubmit }) => {
  return (
    <DropdownWrapper active={selected.length !== 0} onMouseLeave={() => onSubmit && onSubmit()}>
      <button type="button">
        {title}
        <MdExpandMore />
        <span className="space" />
      </button>
      <div className="list">
        <PerfectScrollbar>
          <ul>
            {choices.map((choice: FilterChoiceDefinition) => (
              <ListItem
                onClick={() => onSelect(choice.id)}
                active={selected.includes(choice.id)}
                key={choice.id}
              >
                {choice.label} <MdCheck />
              </ListItem>
            ))}
          </ul>
        </PerfectScrollbar>
      </div>
    </DropdownWrapper>
  );
};
export default Dropdown;