import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { convertFilterStateToGraphQLVariables, FiltersState } from '../utils/filters';
import { ISchoolsMapQuery, ISchoolsMapQueryVariables } from '../types/graphql';
import { SCHOOLS_MAP_QUERY } from './graphql/queries';
import { RELAY_CONNECTION_LIMIT } from './consts';

type GetSchoolsDataType = (filtersValues: Record<string, string | unknown[]>) => void;

const useSchoolsData = (): [
  GetSchoolsDataType,
  LazyQueryResult<ISchoolsMapQuery, ISchoolsMapQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<ISchoolsMapQuery, ISchoolsMapQueryVariables>(
    SCHOOLS_MAP_QUERY,
  );

  const getSchoolsData: GetSchoolsDataType = (filtersValues) => {
    return runQuery({
      variables: {
        ...filtersValues,
        first: RELAY_CONNECTION_LIMIT,
      } as any,
    });
  };

  return [getSchoolsData, info];
};

export default useSchoolsData;
