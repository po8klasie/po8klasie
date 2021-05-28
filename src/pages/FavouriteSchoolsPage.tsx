import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import FavouriteSchool from '../components/sections/FavouriteSchools/FavouriteSchool';
import { NoFavouriteSchoolsInfo } from '../components/Info';
import useFavouriteSchools from '../hooks/useFavouriteSchools';
import useBasicPageViewTracker from '../hooks/useBasicPageViewTracker';
import SEO from '../components/SEO';

const pageTitle = 'Ulubione szkoły';

const FavouriteSchoolsPage: FC<RouteComponentProps> = () => {
  const { favouriteSchools, toggleFavouriteSchool } = useFavouriteSchools();
  useBasicPageViewTracker();

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Breadcrumbs steps={[[pageTitle]]} />
        <PageTitle>{pageTitle}</PageTitle>
        {favouriteSchools.length === 0 && <NoFavouriteSchoolsInfo />}
        {favouriteSchools.map((id: string) => (
          <FavouriteSchool key={id} schoolID={id} toggleFavourite={toggleFavouriteSchool} />
        ))}
      </Container>
    </Layout>
  );
};

export default FavouriteSchoolsPage;
