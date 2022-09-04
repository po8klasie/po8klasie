import React, { FC } from 'react';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import Layout from '../components/website/Layout';
import HeroSection, { ProjectsList } from '../components/website/LandingPage/HeroSection';
import PartnersSection from '../components/website/LandingPage/PartnersSection';
import ContactUsSection from '../components/website/LandingPage/ContactUsSection';
import WhatDoWeDoSection from '../components/website/LandingPage/WhatDoWeDoSection';
import CivicTechSection from '../components/website/LandingPage/CivicTechSection';
import FeaturesSection from '../components/website/LandingPage/FeaturesSection';
import TeamSection from '../components/website/LandingPage/TeamSection';
import OurStorySection from '../components/website/LandingPage/OurStorySection';
import SupportUsSection from '../components/website/LandingPage/SupportUsSection';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { projectConfigs } from '../config';

interface LandingPageProps {
  projectsList: ProjectsList;
}

const LandingPage: FC<LandingPageProps> = ({ projectsList }) => {
  return (
    <Layout projectsList={projectsList}>
      <NextSeo
        titleTemplate="%s"
        title="po8klasie"
        description="Wyszukiwarka szkół średnich. Wierzymy, że wybór szkoły średniej nie powinien ograniczać się tylko do kryterium punktowego."
      />
      <HeroSection projectsList={projectsList} />
      <WhatDoWeDoSection />
      <CivicTechSection />
      <FeaturesSection />
      <OurStorySection />
      <TeamSection />
      <PartnersSection />
      <SupportUsSection />
      <ContactUsSection />
    </Layout>
  );
};

export default LandingPage;

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// A page that relies on publicRuntimeConfig must use getInitialProps/getServerSideProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps/getServerSideProps.
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['landing'])),
    projectsList: Object.values(projectConfigs).map(({ projectID, appearance }) => ({
      projectID,
      appName: appearance.appName,
    })),
  },
});
