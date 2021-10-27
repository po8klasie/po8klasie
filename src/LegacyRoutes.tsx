import React, { FC, lazy } from 'react';
import { Redirect, Router } from '@reach/router';
import LandingPage from './pages/legacy/LandingPage';
import SchoolPage from './pages/legacy/SchoolPage';
import SchoolsPage from './pages/legacy/SchoolsPage';
import lazyLoaded from './utils/lazyLoaded';
import SchoolsGridPage from './pages/legacy/SchoolsGridPage';
import SchoolsMapPage from './pages/legacy/SchoolsMapPage';
import FavouriteSchoolsPage from './pages/legacy/FavouriteSchoolsPage';

const Calculator = lazyLoaded(lazy(() => import('./pages/legacy/Calculator')));
const ForDevelopersPage = lazyLoaded(lazy(() => import('./pages/legacy/articles/ForDevelopers')));
const GetInvolvedPage = lazyLoaded(lazy(() => import('./pages/legacy/articles/GetInvolved')));
const AboutDataPage = lazyLoaded(lazy(() => import('./pages/legacy/articles/AboutData')));
const PrivacySettingsPage = lazyLoaded(lazy(() => import('./pages/legacy/articles/PrivacySettings')));
const PrivacyPolicyPage = lazyLoaded(lazy(() => import('./pages/legacy/articles/PrivacyPolicy')));
const AboutPage = lazyLoaded(lazy(() => import('./pages/legacy/AboutPage')));
const NotFoundPage = lazyLoaded(lazy(() => import('./pages/legacy/NotFoundPage')));

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
