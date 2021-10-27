import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import useDeepCompareEffect from 'use-deep-compare-effect';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageTitle from '../../components/PageTitle';
import FavouriteSchool, {
  FavouriteSchoolProps,
} from '../../components/sections/FavouriteSchools/FavouriteSchool';
import { ErrorInfo, NoFavouriteSchoolsInfo } from '../../components/Info';
import useFavouriteSchools from '../../hooks/useFavouriteSchools';
import useBasicPageViewTracker from '../../hooks/useBasicPageViewTracker';
import SEO from '../../components/SEO';
import { IFavouriteSchoolsQuery } from '../../types/graphql';
import useFavouriteSchoolsData from '../../api/favouriteSchoolsData';
import { LoadingCard } from '../../components/sections/FavouriteSchools/FavouriteSchoolWrapper';

interface FavouriteSchoolsListingProps {
  schools: IFavouriteSchoolsQuery['allSchools'];
  toggleFavouriteSchool: (schoolId: string) => void;
}

const FavouriteSchoolsListing: FC<FavouriteSchoolsListingProps> = ({
  schools,
  toggleFavouriteSchool,
}) => {
  if (!schools) return null;

  return (
    <>
      {(schools.edges as { node: FavouriteSchoolProps['school'] }[]).map(({ node }) => (
        <FavouriteSchool
          school={node}
          key={node.schoolId}
          toggleFavourite={toggleFavouriteSchool}
        />
      ))}
    </>
  );
};

const pageTitle = 'Ulubione szkoły';

const FavouriteSchoolsPage: FC<RouteComponentProps> = () => {
  const { favouriteSchools: favouriteSchoolsIDs, toggleFavouriteSchool } = useFavouriteSchools();
  const [getFavouriteSchoolsData, { data, error, loading }] = useFavouriteSchoolsData();

  useDeepCompareEffect(() => {
    if (favouriteSchoolsIDs.length > 0) getFavouriteSchoolsData(favouriteSchoolsIDs);
  }, [favouriteSchoolsIDs]);

  useBasicPageViewTracker();

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Breadcrumbs steps={[[pageTitle]]} />
        <PageTitle>{pageTitle}</PageTitle>
        {favouriteSchoolsIDs.length === 0 && <NoFavouriteSchoolsInfo />}
        {!data && loading && new Array(favouriteSchoolsIDs.length).fill(<LoadingCard />)}
        {!data && error && <ErrorInfo />}
        {data && favouriteSchoolsIDs.length !== 0 && (
          <FavouriteSchoolsListing
            schools={data.allSchools}
            toggleFavouriteSchool={toggleFavouriteSchool}
          />
        )}
      </Container>
    </Layout>
  );
};

export default FavouriteSchoolsPage;
