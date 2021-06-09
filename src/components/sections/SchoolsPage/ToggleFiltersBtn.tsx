import React from 'react';
import { FiFilter } from 'react-icons/fi';
import styled from '../../../styling/styled';

const FiltersButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;  
  color: ${(props) => props.theme.colors.primary};
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;-
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 10px;
  }
`;

interface ToggleFiltersBtnProps {
  onClick: () => void;
}

const ToggleFiltersBtn: React.FC<ToggleFiltersBtnProps> = ({ onClick }) => {
  return (
    <FiltersButton type="button" onClick={onClick}>
      <FiFilter /> Filtry
    </FiltersButton>
  );
};

export default ToggleFiltersBtn;
