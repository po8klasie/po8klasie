import React, { FC } from 'react';
import styled from '../../../styling/styled';
import { getTotalPages } from '../../../utils/pagination';
import { BsSkipEnd, BsSkipStart } from 'react-icons/all';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  div {
    display: inline-flex;
  }
`;
const BaseButton = styled.button<any>`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
`;

const PaginationButton = styled(BaseButton)`
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

const Pagination: FC<any> = ({ count, page, onPageChange }) => {
  const totalPages = getTotalPages(count);

  return (
    <PaginationWrapper>
      <div>
        <PaginationSkipButton onClick={() => onPageChange(1)}>
          <BsSkipStart />
        </PaginationSkipButton>
        {page - 2 > 0 && (
          <PaginationButton onClick={() => onPageChange(page - 2)}>{page - 2}</PaginationButton>
        )}
        {page - 1 > 0 && (
          <PaginationButton onClick={() => onPageChange(page - 1)}>{page - 1}</PaginationButton>
        )}
        <PaginationButton active={true}>{page}</PaginationButton>
        {page + 1 < totalPages && (
          <PaginationButton onClick={() => onPageChange(page + 1)}>{page + 1}</PaginationButton>
        )}
        {page + 2 < totalPages && (
          <PaginationButton onClick={() => onPageChange(page + 2)}>{page + 2}</PaginationButton>
        )}
        <PaginationSkipButton onClick={() => onPageChange(totalPages)}>
          <BsSkipEnd />
        </PaginationSkipButton>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
