import React from 'react';
import styled from '../styling/styled';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Choice } from '../data/filters';

const DropdownWrapper = styled.div<{ active: boolean }>`
  margin-right: 10px;
  position: relative;
  outline: none;
  button {
    display: flex;
    z-index: 1;
    position: relative;
    align-items: center;
    padding: 10px;
    background: white;
    border-style: solid;
    border-width: ${props => (props.active ? '2' : '1')}px;
    border-color: ${props => props.theme.colors.primaryLight};
    border-radius: 10px;
    font-size: 1em;
    transition: 0.2s all;

    .material-icons {
      color: ${props => props.theme.colors.primaryLight};
      margin-left: 10px;
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
  }
  .list {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 1;
    min-width: 100%;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 5px;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s all;

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
  &:hover button .material-icons {
    transform: rotate(-180deg);
  }
  &:hover button {
    background: ${props => props.theme.colors.light};
    border-color: ${props =>
      props.active ? props.theme.colors.primaryLight : 'transparent'};
  }
`;
const ListItem = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => (props.active ? '#F2F2F2' : '')};
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 15px 10px 7px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
  .material-icons {
    color: green;
    margin-left: 10px;
    transition: opacity 0.2s;
    opacity: ${props => (props.active ? 1 : 0)};
  }
`;

type DropdownProps = {
  title: string;
  choices: Choice[];
  selected: string[];
  onSelect: any;
};
const Dropdown = (props: DropdownProps) => {
  return (
    <DropdownWrapper active={props.selected.length !== 0}>
      <button type={'button'}>
        {props.title}
        <span className="material-icons">expand_more</span>
        <span className="space"></span>
      </button>
      <div className={'list'}>
        <PerfectScrollbar>
          <ul>
            {props.choices.map((choice: Choice) => (
              <ListItem
                onClick={() => props.onSelect(choice.id)}
                active={props.selected.includes(choice.id)}
                key={choice.id}
              >
                {choice.label} <span className="material-icons">check</span>
              </ListItem>
            ))}
          </ul>
        </PerfectScrollbar>
      </div>
    </DropdownWrapper>
  );
};
export default Dropdown;
