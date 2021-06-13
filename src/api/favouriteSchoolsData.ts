import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { IFavouriteSchoolsQuery, IFavouriteSchoolsQueryVariables } from '../types/graphql';
import { FAVOURITE_SCHOOLS_QUERY } from './graphql/queries';
import { RELAY_CONNECTION_LIMIT } from './consts';
import { CURRENT_RECRUITMENT_YEAR } from '../utils/schoolClasses';

type GetFavouriteSchoolsDataType = (schoolIds: string[]) => void;

const useFavouriteSchoolsData = (): [
  GetFavouriteSchoolsDataType,
  LazyQueryResult<IFavouriteSchoolsQuery, IFavouriteSchoolsQueryVariables>,
] => {
  const [runQuery, info] = useLazyQuery<IFavouriteSchoolsQuery, IFavouriteSchoolsQueryVariables>(
    FAVOURITE_SCHOOLS_QUERY,
  );

  const getFavouriteSchoolsData: GetFavouriteSchoolsDataType = (schoolIDs) => {
    return runQuery({
      variables: {
        schoolIDs,
        year: CURRENT_RECRUITMENT_YEAR,
        first: RELAY_CONNECTION_LIMIT,
      },
    });
  };

  return [getFavouriteSchoolsData, info];
};

export default useFavouriteSchoolsData;
