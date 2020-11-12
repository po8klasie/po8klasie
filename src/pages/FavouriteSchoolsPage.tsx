import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import { getFavSchoolsFromLocalStorage } from '../utils/localStorageFavSchools';
import FavouriteSchool from '../components/sections/FavouriteSchools/FavouriteSchool';
import { NoFavouriteSchoolsInfo } from '../components/Info';

const FavouriteSchoolsPage: React.FC<RouteComponentProps> = () => {
  const [updateKey, setKey] = useState<number>(0);

  const favouriteSchoolsIDs: string[] = getFavSchoolsFromLocalStorage();

  return (
    <Layout>
      <Container>
        <Breadcrumbs steps={[['Ulubione szkoły']]} />
        <PageTitle>Ulubione</PageTitle>
        {favouriteSchoolsIDs.length === 0 && <NoFavouriteSchoolsInfo />}
        {favouriteSchoolsIDs.map((id: string) => (
          <FavouriteSchool
            schoolID={id}
            key={id}
            updateCallback={() => setKey(updateKey + 1)}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default FavouriteSchoolsPage;
