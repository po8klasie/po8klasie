import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { convertFilterStateToGraphQLVariables, FiltersState } from '../utils/filters';
import { ISchoolListingQuery, ISchoolListingQueryVariables } from '../types/graphql';
import { getPaginationOffset, PER_PAGE } from '../utils/pagination';
import { SCHOOLS_LISTING_QUERY } from './graphql/queries';

type GetSchoolListingType = (
  query?: string,
  filtersState?: FiltersState,
  pageNo?: number,
  disablePagination?: boolean,
) => void;

const LARGE_NUMBER = 10 ** 6;

const useSchoolsListing = (): [
  GetSchoolListingType,
  LazyQueryResult<ISchoolListingQuery, ISchoolListingQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<ISchoolListingQuery, ISchoolListingQueryVariables>(
    SCHOOLS_LISTING_QUERY,
  );

  const getSchoolsListing: GetSchoolListingType = (
    query = '',
    filtersState = new Map(),
    pageNo = 1,
    disablePagination = false,
  ) => {
    return runQuery({
      variables: {
        query,
        first: disablePagination ? LARGE_NUMBER : PER_PAGE,
        offset: disablePagination ? 0 : getPaginationOffset(pageNo),
        ...convertFilterStateToGraphQLVariables(filtersState),
      } as any,
    });
  };

  return [getSchoolsListing, info];
};

export default useSchoolsListing;
