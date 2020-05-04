import React from 'react';
import styled from '../styling/styled';
import { getTotalPages } from '../utils/pagination';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  div {
    display: inline-flex;
  }
`;
const PaginationButton = styled.button<any>`
  display: flex;
  justify-contents: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-left: none;
  background: ${props => (props.active ? props.theme.colors.light : 'none')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  outline: none;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 1px solid ${props => props.theme.colors.primaryLight};
  }
  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:not(.with-icon) {
    padding: 10px 20px;
  }
`;
type PaginationProps = any;

const Pagination = (props: PaginationProps) => {
  const totalPages = getTotalPages(props.count);
  const paginate = (e: any, goTo: number) => {
    e.preventDefault();
    props.onPaginate(goTo);
  };
  return (
    <PaginationWrapper>
      <div>
        <PaginationButton
          className={'with-icon'}
          onClick={(e: any) => paginate(e, 1)}
        >
          <span className="material-icons">skip_previous</span>
        </PaginationButton>
        <PaginationButton
          className={'with-icon'}
          disabled={props.page - 1 <= 0}
          onClick={(e: any) => paginate(e, props.page - 1)}
        >
          <span className="material-icons">navigate_before</span>
        </PaginationButton>
        {props.page - 2 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, props.page - 2)}>
            {props.page - 2}
          </PaginationButton>
        )}
        {props.page - 1 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, props.page - 1)}>
            {props.page - 1}
          </PaginationButton>
        )}
        <PaginationButton active={true}>{props.page}</PaginationButton>
        {props.page + 1 < totalPages && (
          <PaginationButton
            onClick={(e: any) => paginate(e, parseInt(props.page) + 1)}
          >
            {parseInt(props.page) + 1}
          </PaginationButton>
        )}
        {props.page + 2 < totalPages && (
          <PaginationButton
            onClick={(e: any) => paginate(e, parseInt(props.page) + 2)}
          >
            {parseInt(props.page) + 2}
          </PaginationButton>
        )}
        <PaginationButton
          className={'with-icon'}
          disabled={parseInt(props.page) + 1 > totalPages}
          onClick={(e: any) => paginate(e, parseInt(props.page) + 1)}
        >
          <span className="material-icons">navigate_next</span>
        </PaginationButton>
        <PaginationButton
          className={'with-icon'}
          onClick={(e: any) => paginate(e, totalPages)}
        >
          <span className="material-icons">skip_next</span>
        </PaginationButton>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
