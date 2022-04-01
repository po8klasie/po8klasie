import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { withProjectConfig, ProjectConfigConsumerProps } from '../../config/withProjectConfig';
import { getProjectConfigStaticProps, getStaticPathsPerProject } from '../../config/nextHelpers';
import AppLayout from '../../components/app/AppLayout';
import SearchView from '../../components/app/SearchPage/SearchView';
import { apolloClient } from '../../utils/externalServices';

type SchoolPageProps = ProjectConfigConsumerProps<'appearance' | 'searchView'>;

const SearchPage: FC<SchoolPageProps> = ({ PROJECT: { appearance } }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppLayout projectAppearance={appearance} wideNavbar noFooter>
        <SearchView />
      </AppLayout>
    </ApolloProvider>
  );
};

export default withProjectConfig<SchoolPageProps>(SearchPage);

export const getStaticProps = getProjectConfigStaticProps(['appearance', 'searchView']);

export const getStaticPaths = getStaticPathsPerProject;
