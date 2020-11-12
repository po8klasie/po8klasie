import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import FavouriteSchool from '../components/sections/FavouriteSchools/FavouriteSchool';
import { NoFavouriteSchoolsInfo } from '../components/Info';
import { useFavouriteSchools } from '../hooks/useFavouriteSchools';

const FavouriteSchoolsPage: React.FC<RouteComponentProps> = () => {
  const { favouriteSchools, toggleFavouriteSchool } = useFavouriteSchools();

  return (
    <Layout>
      <Container>
        <Breadcrumbs steps={[['Ulubione szkoły']]} />
        <PageTitle>Ulubione</PageTitle>
        {favouriteSchools.length === 0 && <NoFavouriteSchoolsInfo />}
        {favouriteSchools.map((id: string) => (
          <FavouriteSchool
            key={id}
            schoolID={id}
            toggleFavourite={toggleFavouriteSchool}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default FavouriteSchoolsPage;
