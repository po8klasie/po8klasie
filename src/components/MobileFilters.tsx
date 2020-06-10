import React, { useState } from 'react';
import styled from '../styling/styled';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Choice, FilterData } from '../data/filters';

const FiltersButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 1.2em;

  span {
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
  }
`;
const MobileFiltersModal = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => (props.active ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 10;
  transition: 0.2s all;
`;
const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #000;
  position: relative;
  font-size: 1.2em;

  .material-icons {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.primary};
  }
  .title {
    display: block;
    text-align: center;
    text-transform: uppercase;
  }
`;
const List = styled.ul`
  display: block;
  padding-inline-start: 0;
  width: calc(100% - 40px);
  margin: auto;

  li {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #cfcfcf;
  }
`;
const CheckIcon = styled.span<{ active: boolean }>`
  color: #008000;
  transition: opacity 0.2s;
  opacity: ${props => (props.active ? 1 : 0)};
  &::after {
    content: 'check';
  }
`;

const MobileFilters = (props: any) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const getFilterById = (id: string) =>
    props.filters.find(
      (f: FilterData) => (f as any)[props.idKey as string] === id,
    );
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const goBack = () => {
    if (activeFilterId === null) setModalOpen(false);
    else setActiveFilterId(null);
  };

  return (
    <>
      <FiltersButton type={'button'} onClick={(e: any) => setModalOpen(true)}>
        <span className="material-icons">settings</span> Filtry
      </FiltersButton>
      <MobileFiltersModal active={isModalOpen}>
        <ModalHeader>
          <span className="material-icons" onClick={goBack}>
            chevron_left
          </span>
          <span className="title">
            {activeFilterId === null
              ? 'Filtry'
              : getFilterById(activeFilterId).title}
          </span>
        </ModalHeader>
        <PerfectScrollbar>
          {activeFilterId === null ? (
            <List>
              {props.filters.map((filter: FilterData) => (
                <li
                  key={filter.apiParam}
                  onClick={() =>
                    setActiveFilterId((filter as any)[props.idKey])
                  }
                >
                  {filter.title}
                  <span className="material-icons">chevron_right</span>
                </li>
              ))}
            </List>
          ) : (
            <List>
              {getFilterById(activeFilterId).choices.map((choice: Choice) => {
                const filter = getFilterById(activeFilterId);
                const handleClick = () =>
                  props.createHandler(filter)(choice.id);
                return (
                  <li key={choice.id} onClick={handleClick}>
                    {choice.label}
                    <CheckIcon
                      active={
                        props.filtersValues[filter[props.idKey]] &&
                        props.filtersValues[filter[props.idKey]].includes(
                          choice.id,
                        )
                      }
                      className={'material-icons'}
                    />
                  </li>
                );
              })}
            </List>
          )}
        </PerfectScrollbar>
      </MobileFiltersModal>
    </>
  );
};
export default MobileFilters;
