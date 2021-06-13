import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { convertFilterStateToGraphQLVariables, FiltersState } from '../utils/filters';
import { ISchoolListingQuery, ISchoolListingQueryVariables } from '../types/graphql';
import { getPaginationOffset, PER_PAGE } from '../utils/pagination';
import { SCHOOLS_LISTING_QUERY } from './graphql/queries';

type GetSchoolsListingDataType = (
  query?: string,
  filtersState?: FiltersState,
  pageNo?: number,
) => void;

const useSchoolsListingData = (): [
  GetSchoolsListingDataType,
  LazyQueryResult<ISchoolListingQuery, ISchoolListingQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<ISchoolListingQuery, ISchoolListingQueryVariables>(
    SCHOOLS_LISTING_QUERY,
  );

  const getSchoolsListingData: GetSchoolsListingDataType = (
    query = '',
    filtersState = new Map(),
    pageNo = 1,
  ) => {
    return runQuery({
      variables: {
        query,
        first: PER_PAGE,
        offset: getPaginationOffset(pageNo),
        ...convertFilterStateToGraphQLVariables(filtersState),
      },
    });
  };

  return [getSchoolsListingData, info];
};

export default useSchoolsListingData;
