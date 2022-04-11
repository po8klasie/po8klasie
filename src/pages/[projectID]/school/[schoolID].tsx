import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { withProjectConfig, ProjectConfigConsumerProps } from '../../../config/withProjectConfig';
import { getProjectConfigProps } from '../../../config/nextHelpers';
import AppLayout from '../../../components/app/AppLayout';
import SchoolHero from '../../../components/app/SchoolPage/SchoolHero';
import SchoolPageContent from '../../../components/app/SchoolPage/SchoolPageContent';
import { RailsApiSchool } from '../../../types';
import { ProjectConfig } from '../../../config/types';

interface SchoolPageProps extends ProjectConfigConsumerProps<'appearance' | 'schoolInfo'> {
  school: RailsApiSchool;
}

const SchoolPage: FC<SchoolPageProps> = ({ PROJECT: { appearance, schoolInfo }, school }) => (
  <AppLayout projectAppearance={appearance}>
    <SchoolHero school={school} />
    <SchoolPageContent schoolInfoConfig={schoolInfo} school={school} />
  </AppLayout>
);

export default withProjectConfig<SchoolPageProps>(SchoolPage);

interface SchoolPageParams extends ParsedUrlQuery {
  schoolID: string;
  projectID: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<SchoolPageParams>,
): Promise<
  GetServerSidePropsResult<{ PROJECT: Partial<ProjectConfig>; school: RailsApiSchool }>
> => {
  const schoolID = context?.params?.schoolID;
  const projectID = context?.params?.projectID;

  if (!schoolID || !projectID)
    return {
      notFound: true,
    };

  const fetcher = await import('../../../api/railsAPI/fetcher').then((m) => m.default);
  const school = (await fetcher(`/institutions/${schoolID}`)) as RailsApiSchool;

  if (!school.id) return { notFound: true };

  return {
    props: {
      PROJECT: await getProjectConfigProps(['appearance', 'schoolInfo'], projectID),
      school,
    },
  };
};

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// A page that relies on publicRuntimeConfig must use getInitialProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps.
export const getInitialProps = (): void => {};
