import React from 'react';
import styled from '../../styling/styled';
import { getTotalPages } from '../../utils/pagination';
import {SearchControlProps, useSearchControl} from "../../hooks/useSearchControl";
import {School} from "../../types";
import {useParamsChangeHandler} from "../../hooks/useParamsChangeHandler";

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
interface SearchPaginationControlProps extends SearchControlProps {
  count: number
  schools: School[][]
}

const SearchPaginationControl = (props: SearchPaginationControlProps) => {
  const { payload$, schools, count, active } = props;
  const { state, updateState } = useSearchControl<number>({
    key: 'page',
    defaultValue: 1,
    payload$
  });
  const onParamsChange = () => {
      updateState(1)
    console.log('set 1')
  };
  useParamsChangeHandler({
    payload$,
    excludeKeys: ['page'],
    onParamsChange
  });

  const totalPages = getTotalPages(count);
  const paginate = (e: any, page: number) => {
    // e.preventDefault();
    console.log(page, schools)
    updateState(page)
      
  };
  if(!active){
    return null;
  }

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
          disabled={state - 1 <= 0}
          onClick={(e: any) => paginate(e, state - 1)}
        >
          <span className="material-icons">navigate_before</span>
        </PaginationButton>
        {state - 2 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, state - 2)}>
            {state - 2}
          </PaginationButton>
        )}
        {state - 1 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, state - 1)}>
            {state - 1}
          </PaginationButton>
        )}
        <PaginationButton active={true}>{state}</PaginationButton>
        {state + 1 < totalPages && (
          <PaginationButton
            onClick={(e: any) => paginate(e, state + 1)}
          >
            {state + 1}
          </PaginationButton>
        )}
        {state + 2 < totalPages && (
          <PaginationButton
            onClick={(e: any) => paginate(e, state + 2)}
          >
            {state + 2}
          </PaginationButton>
        )}
        <PaginationButton
          className={'with-icon'}
          disabled={state + 1 > totalPages}
          onClick={(e: any) => paginate(e, state + 1)}
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

export default SearchPaginationControl;
