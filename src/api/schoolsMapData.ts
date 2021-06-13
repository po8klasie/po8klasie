import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { convertFilterStateToGraphQLVariables, FiltersState } from '../utils/filters';
import { ISchoolsMapQuery, ISchoolsMapQueryVariables } from '../types/graphql';
import { SCHOOLS_MAP_QUERY } from './graphql/queries';
import { RELAY_CONNECTION_LIMIT } from './consts';

type GetSchoolsMapDataType = (query?: string, filtersState?: FiltersState) => void;

const useSchoolsMapData = (): [
  GetSchoolsMapDataType,
  LazyQueryResult<ISchoolsMapQuery, ISchoolsMapQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<ISchoolsMapQuery, ISchoolsMapQueryVariables>(
    SCHOOLS_MAP_QUERY,
  );

  const getSchoolsMapData: GetSchoolsMapDataType = (query = '', filtersState = new Map()) => {
    return runQuery({
      variables: {
        query,
        first: RELAY_CONNECTION_LIMIT,
        ...convertFilterStateToGraphQLVariables(filtersState),
      },
    });
  };

  return [getSchoolsMapData, info];
};

export default useSchoolsMapData;
