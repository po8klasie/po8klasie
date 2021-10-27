import React, { FC } from 'react';
import { withProjectConfig, ProjectConfigConsumerProps } from '../../config/withProjectConfig';
import { getProjectConfigStaticProps, getStaticPathsPerProject } from '../../config/nextHelpers';

type SearchPageProps = ProjectConfigConsumerProps<'appearance' | 'filters'>;

const SearchPage: FC<SearchPageProps> = ({
  PROJECT: {
    appearance: { appName },
  },
}) => <h1>Hello world from {appName}</h1>;

export default withProjectConfig<SearchPageProps>(SearchPage);

export const getStaticProps = getProjectConfigStaticProps(['appearance']);

export const getStaticPaths = getStaticPathsPerProject;
