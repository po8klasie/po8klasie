import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import { withProjectConfig, ProjectConfigConsumerProps } from '../../config/withProjectConfig';
import { getProjectConfigStaticProps, getStaticPathsPerProject } from '../../config/nextHelpers';
import AppLayout from '../../components/app/AppLayout';
import SchoolHero from '../../components/app/SchoolPage/SchoolHero';
import SchoolPageContent from '../../components/app/SchoolPage/SchoolPageContent';

type SchoolPageProps = ProjectConfigConsumerProps<'appearance' | 'schoolInfo'>;

const SchoolPage: FC<SchoolPageProps> = ({ PROJECT: { appearance, schoolInfo } }) => {
  return (
    <AppLayout projectAppearance={appearance}>
      <SchoolHero />
      <SchoolPageContent schoolInfoConfig={schoolInfo} />
    </AppLayout>
  );
};

export default withProjectConfig<SchoolPageProps>(SchoolPage);

export const getStaticProps = getProjectConfigStaticProps(['appearance', 'schoolInfo']);

export const getStaticPaths = getStaticPathsPerProject;
