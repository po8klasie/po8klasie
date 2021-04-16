import React, { FC } from 'react';
import { Link } from '@reach/router';
import { BsX } from 'react-icons/bs';
import styled from '../styling/styled';
import errorImg from '../assets/images/SchoolsPage/error.png';
import notFoundImg from '../assets/images/SchoolsPage/not-found.png';
import favouriteSchoolsImg from '../assets/images/favouriteSchools.png';

const ChipWrapper = styled.div`
  display: inline-flex;
  margin-right: .5rem;
  font-size: 1rem;
`;

const ChipButton = styled.button`
  border: none;
  background: #f2f1f1;
  padding: .5rem;
`;

const LabelButton = styled(ChipButton)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;
const RemoveButton = styled(ChipButton)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ChipProps {
  label: string;
  onClick?: () => void;
  onRemove?: () => void;
}

const Chip: FC<ChipProps> = ({ label, onClick, onRemove }) => {
  return (
    <ChipWrapper>
      <LabelButton onClick={() => onClick && onClick()}>{label}</LabelButton>
      <RemoveButton onClick={() => onRemove && onRemove()}>
        <BsX />
      </RemoveButton>
    </ChipWrapper>
  );
};

export default Chip;
