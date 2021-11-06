import React, { FC, lazy } from 'react';
import { Redirect, Router } from '@reach/router';
import LandingPage from './legacyPages/LandingPage';
import SchoolPage from './legacyPages/SchoolPage';
import SchoolsPage from './legacyPages/SchoolsPage';
import lazyLoaded from './utils/lazyLoaded';
import SchoolsGridPage from './legacyPages/SchoolsGridPage';
import SchoolsMapPage from './legacyPages/SchoolsMapPage';
import FavouriteSchoolsPage from './legacyPages/FavouriteSchoolsPage';

const Calculator = lazyLoaded(lazy(() => import('./legacyPages/Calculator')));
const ForDevelopersPage = lazyLoaded(lazy(() => import('./legacyPages/articles/ForDevelopers')));
const GetInvolvedPage = lazyLoaded(lazy(() => import('./legacyPages/articles/GetInvolved')));
const AboutDataPage = lazyLoaded(lazy(() => import('./legacyPages/articles/AboutData')));
const PrivacySettingsPage = lazyLoaded(
  lazy(() => import('./legacyPages/articles/PrivacySettings')),
);
const PrivacyPolicyPage = lazyLoaded(lazy(() => import('./legacyPages/articles/PrivacyPolicy')));
const AboutPage = lazyLoaded(lazy(() => import('./legacyPages/AboutPage')));
const NotFoundPage = lazyLoaded(lazy(() => import('./legacyPages/NotFoundPage')));

const LegacyRoutes: FC = () => (
  <Router>
    <LandingPage path="/" />
    <SchoolsPage path="/schools-old" />
    <Redirect from="/schools" to="/schools/grid" />
    <SchoolsGridPage path="/schools/grid" />
    <SchoolsMapPage path="/schools/map" />
    <SchoolPage path="/school/:schoolID" />
    <FavouriteSchoolsPage path="/favourite-schools" />
    <Calculator path="/calculator" />

    <AboutPage path="/about-us" />
    <ForDevelopersPage path="/for-developers" />
    <GetInvolvedPage path="/get-involved" />
    <AboutDataPage path="/about-data" />

    <PrivacyPolicyPage path="/privacy-policy" />
    <PrivacySettingsPage path="/privacy-settings" />

    <NotFoundPage default />
  </Router>
);

export default LegacyRoutes;
