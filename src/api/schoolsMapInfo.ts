import { gql, LazyQueryResult, useLazyQuery } from '@apollo/client';
import { convertFilterStateToGraphQLVariables, FiltersState } from '../utils/filters';
import { ISchoolListingQuery, ISchoolListingQueryVariables } from '../types/graphql';
import { SCHOOL_CARD_PROPS_FRAGMENT } from '../components/SchoolCard';
import { getPaginationOffset, PER_PAGE } from '../utils/pagination';
import { FilterKey } from '../data/filters';

const SCHOOLS_LISTING_QUERY = gql`
  ${SCHOOL_CARD_PROPS_FRAGMENT}
  query SchoolMapInfo(
    $offset: Int
    $first: Int
    $query: String
    $isPublic: Boolean
    $extendedSubjects: [String]
    $districts: [String]
  ) {
    allSchools(
      offset: $offset
      first: $first
      query: $query
      isPublic: $isPublic
      extendedSubjects: $extendedSubjects
      districts: $districts
    ) {
      totalCount
      edges {
        node {
          ...SchoolCardProps
        }
      }
    }
  }
`;

type GetSchoolListingFn = (
  query?: string,
  filtersState?: FiltersState,
  pageNo?: number,
  disablePagination?: boolean,
) => void;

const LARGE_NUMBER = 10 ** 6;

const useSchoolsListing = (): [
  GetSchoolListingFn,
  LazyQueryResult<ISchoolListingQuery, ISchoolListingQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<ISchoolListingQuery, ISchoolListingQueryVariables>(
    SCHOOLS_LISTING_QUERY,
  );

  const getSchoolsListing: GetSchoolListingFn = (
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
