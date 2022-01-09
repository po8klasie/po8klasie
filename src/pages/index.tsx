import React, { FC } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>po8klasie - wyszukiwarka szkół średnich</title>
      </Head>
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
