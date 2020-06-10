import React, { useEffect, useState } from 'react';
import styled from '../../../styling/styled';
import { useDispatch, useSelector } from 'react-redux';
import {MdNavigateBefore, MdNavigateNext, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import { fetchSchools } from '../../../store/modules/schools';
import { getTotalPages } from '../../../utils/pagination';
import { createSearchControllerConfig } from '../../../utils/searchControllers';
import { getSearchViewById } from '../../../utils/searchViews';
import {BsFillSkipEndFill, BsFillSkipStartFill, BsSkipEnd, BsSkipStart} from "react-icons/all";

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
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
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
  
  svg{
    width: 20px;
    height: 20px;
  }
`;

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
        <PaginationSkipButton
          onClick={(e: any) => paginate(e, 1)}
        >
          <BsSkipStart/>
        </PaginationSkipButton>
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
        <PaginationSkipButton
          onClick={(e: any) => paginate(e, totalPages)}
        >
          <BsSkipEnd />
        </PaginationSkipButton>
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
