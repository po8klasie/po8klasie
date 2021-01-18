import React, { FC } from 'react';
import { BsSkipEnd, BsSkipStart } from 'react-icons/all';
import styled from '../../../styling/styled';
import { getTotalPages } from '../../../utils/pagination';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  div {
    display: inline-flex;
  }
`;
const BaseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

const PaginationButton = styled(BaseButton)<{ active?: boolean }>`
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  font-size: 1em;
  padding: 10px 20px;
`;

const PaginationSkipButton = styled(BaseButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 13px #00000029;
  border-radius: 50%;
  padding: 10px;
  margin: 0 20px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const Pagination: FC<PaginationProps> = ({ count, page, onPageChange, disabled }) => {
  const totalPages = getTotalPages(count);

  if (totalPages === 1 || totalPages === 0) return null;

  return (
    <PaginationWrapper>
      <div>
        <PaginationSkipButton onClick={() => onPageChange(1)} disabled={disabled}>
          <BsSkipStart />
        </PaginationSkipButton>
        {page - 2 > 0 && (
          <PaginationButton onClick={() => onPageChange(page - 2)} disabled={disabled}>
            {page - 2}
          </PaginationButton>
        )}
        {page - 1 > 0 && (
          <PaginationButton onClick={() => onPageChange(page - 1)} disabled={disabled}>
            {page - 1}
          </PaginationButton>
        )}
        <PaginationButton active>{page}</PaginationButton>
        {page + 1 < totalPages && (
          <PaginationButton onClick={() => onPageChange(page + 1)} disabled={disabled}>
            {page + 1}
          </PaginationButton>
        )}
        {page + 2 < totalPages && (
          <PaginationButton onClick={() => onPageChange(page + 2)} disabled={disabled}>
            {page + 2}
          </PaginationButton>
        )}
        <PaginationSkipButton onClick={() => onPageChange(totalPages)} disabled={disabled}>
          <BsSkipEnd />
        </PaginationSkipButton>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
