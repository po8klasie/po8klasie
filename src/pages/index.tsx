import React, { FC } from 'react';
import { NextSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import Layout from '../components/website/Layout';
import HeroSection from '../components/website/LandingPage/HeroSection';
import PartnersSection from '../components/website/LandingPage/PartnersSection';
import ContactUsSection from '../components/website/LandingPage/ContactUsSection';
import WhatDoWeDoSection from '../components/website/LandingPage/WhatDoWeDoSection';
import CivicTechSection from '../components/website/LandingPage/CivicTechSection';
import FeaturesSection from '../components/website/LandingPage/FeaturesSection';
import TeamSection from '../components/website/LandingPage/TeamSection';
import OurStorySection from '../components/website/LandingPage/OurStorySection';
import SupportUsSection from '../components/website/LandingPage/SupportUsSection';

const LandingPage: FC = () => {
  return (
    <Layout>
      <NextSeo titleTemplate="po8klasie - wyszukiwarka szkół średnich" />
      <HeroSection />
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
export const getServerSideProps = () => ({ props: {} });
