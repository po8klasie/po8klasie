import React, { FC } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import HeroSection from '../components/website/LandingPage/HeroSection';
import Layout from '../components/website/Layout';
import PartnersSection from '../components/website/LandingPage/PartnersSection';
import ContactUsSection from '../components/website/LandingPage/ContactUsSection';
import WhatDoWeDo from '../components/website/LandingPage/WhatDoWeDo';
import CivicTechSection from '../components/website/LandingPage/CivicTechSection';
import FeaturesSection from '../components/website/LandingPage/FeaturesSection';
import TeamSection from '../components/website/LandingPage/TeamSection';
import OurStorySection from '../components/website/LandingPage/OurStorySection';
import SupportUsSection from '../components/website/LandingPage/SupportUsSection';

const LandingPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Landing</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeroSection />
      <WhatDoWeDo />
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
