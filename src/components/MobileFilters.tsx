import React, { useState, FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BsCheck, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { Choice, FilterData } from '../data/filters';
import styled from '../styling/styled';

const StyledButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  outline: none;
  font-size: 1.2em;
`;

const FiltersButton = styled(StyledButton)`
  svg {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 10px;
  }
`;

const MobileFiltersModal = styled.div<{ active: boolean }>`
  position: fixed;
  top: 100px;
  left: ${(props) => (props.active ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  transition: 0.2s all;
`;
const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
  position: relative;
  font-size: 1.2em;

  .material-icons {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.primary};
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
  color: green;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

// interface MobileFiltersProps {
//   filters: FilterData[];
//   idKey: string;
//   createHandler: any;
//   filtersValues: any;
// }

const MobileFilters: FC<any> = ({
  filters,
  idKey,
  createHandler,
  filtersValues,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const getFilterById = (id: string) => filters.find((f: FilterData) => f.key === id);

  const goBack = () => {
    if (activeFilterId === null) {
      setModalOpen(false);
    } else {
      setActiveFilterId(null);
    }
  };

  return (
    <>
      <FiltersButton type="button" onClick={() => setModalOpen(true)}>
        <FiFilter /> Filtry
      </FiltersButton>
      <MobileFiltersModal active={isModalOpen}>
        <ModalHeader>
          <StyledButton type="button" className="material-icons" onClick={goBack}>
            <BsChevronLeft />
          </StyledButton>
          <span className="title">
            {activeFilterId === null ? 'Filtry' : getFilterById(activeFilterId).title}
          </span>
        </ModalHeader>
        <PerfectScrollbar>
          {activeFilterId === null ? (
            <List>
              {filters.map((filter: FilterData) => (
                <li key={filter.key} onClick={() => setActiveFilterId((filter as any)[idKey])}>
                    {filter.title}
                    <BsChevronRight />
                </li>
              ))}
            </List>
          ) : (
            <List>
              {getFilterById(activeFilterId).choices.map((choice: Choice) => {
                const filter = getFilterById(activeFilterId);
                const handleClick = () => createHandler(filter)(choice.id);
                return (
                  <li key={choice.id} onClick={handleClick}>
                    {choice.label}
                    <CheckIcon
                      active={
                        filtersValues[filter[idKey]] &&
                        filtersValues[filter[idKey]].includes(choice.id)
                      }
                    >
                      <BsCheck />
                    </CheckIcon>
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
