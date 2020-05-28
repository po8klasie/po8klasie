import React, { useEffect, useState } from 'react';
import styled from '../../styling/styled';
import { getTotalPages } from '../../utils/pagination';
import {
  SearchControlProps,
  useSearchControl,
} from '../../hooks/useSearchControl';
import { School } from '../../types';
import { useParamsChangeHandler } from '../../hooks/useParamsChangeHandler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchools } from '../../store/modules/schools';
import { createToParamHandler } from '../../utils/paramHandlers';
import { createSearchControllerConfig } from '../../utils/searchControllers';
import { DEFAULT_VIEW, searchViews } from '../../data/searchViews';
import { getSearchViewById } from '../../utils/searchViews';

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
  count: number;
  schools: School[][];
}

const SearchPaginationController = () => {
  const { searchData, count } = useSelector((page: any) => ({
    searchData: page.schools.searchData,
    count: page.schools.responseData.count,
  }));
  const [active, setActive] = useState(
    getSearchViewById(searchData.view)?.layout?.enablePagination,
  );

  useEffect(() => {
    setActive(getSearchViewById(searchData.view)?.layout?.enablePagination);
  }, [searchData.view]);

  const { page } = searchData;

  const dispatch = useDispatch();

  const totalPages = getTotalPages(count);
  const paginate = (e: any, updatedPage: number) => {
    dispatch(
      fetchSchools({
        searchData: {
          ...searchData,
          page: updatedPage,
        },
      }),
    );
  };

  if (!active) {
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
          disabled={page - 1 <= 0}
          onClick={(e: any) => paginate(e, page - 1)}
        >
          <span className="material-icons">navigate_before</span>
        </PaginationButton>
        {page - 2 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, page - 2)}>
            {page - 2}
          </PaginationButton>
        )}
        {page - 1 > 0 && (
          <PaginationButton onClick={(e: any) => paginate(e, page - 1)}>
            {page - 1}
          </PaginationButton>
        )}
        <PaginationButton active={true}>{page}</PaginationButton>
        {page + 1 < totalPages && (
          <PaginationButton onClick={(e: any) => paginate(e, page + 1)}>
            {page + 1}
          </PaginationButton>
        )}
        {page + 2 < totalPages && (
          <PaginationButton onClick={(e: any) => paginate(e, page + 2)}>
            {page + 2}
          </PaginationButton>
        )}
        <PaginationButton
          className={'with-icon'}
          disabled={page + 1 > totalPages}
          onClick={(e: any) => paginate(e, page + 1)}
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

const searchDataKey = 'page';

export const searchPaginationControllerConfig = createSearchControllerConfig(
  searchDataKey,
  {
    defaultValue: 1,
    toParamHandler: ({ value, key, p }) => {
      if (typeof value === 'number' && Number.isInteger(value) && value > 1)
        return p.set(key, value as any);

      if (p.has(key)) p.delete(key);
    },
    fromParamHandler: ({ p, key }) => {
      const param = p.has(key) && p.get(key) ? p.get(key) : null;
      if (!param) return null;

      if (parseInt(param) && parseInt(param) > 0) return parseInt(param);

      return null;
    },
  },
);

export default SearchPaginationController;
